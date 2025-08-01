import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';

import { controllerAdapter } from '@catalog-service/main/adapters/controller.adpter';
import { listenerAdapter } from '@catalog-service/main/adapters/listener.adapter';
import {
  BuildCreateMediaController,
  BuildFindMediasController,
  BuildUpdateMediaController,
} from '@catalog-service/main/factories/controllers';
import {
  CreateMediaDTO,
  FindMediasDTO,
  UpdateMediaDTO,
  CreatedReviewDTO,
} from '@catalog-service/main/controllers/media/dto';
import { BuildCalculateMediaCommunityAverageListener } from '@catalog-service/main/factories/listeners';
import { Operation } from '@catalog-service/domain/usecases';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { handleCommitOffsetKafka, handleRetryKafka } from '@catalog-service/main/utils';

@Controller('media')
export class MediaController {
  private readonly logger = new Logger(MediaController.name, { timestamp: true });

  constructor(
    private readonly buildFindMediasController: BuildFindMediasController,
    private readonly buildCreateMediaController: BuildCreateMediaController,
    private readonly buildUpdateMediaController: BuildUpdateMediaController,
    private readonly buildCalculateMediaCommunityAverageListener: BuildCalculateMediaCommunityAverageListener,
  ) {}

  @Get()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async find(@Query() query: FindMediasDTO, @Res() response: Response): Promise<void> {
    const result = await controllerAdapter(this.buildFindMediasController.build(), query);
    response.status(result.statusCode).json(result);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() body: CreateMediaDTO, @Res() response: Response): Promise<void> {
    const result = await controllerAdapter(this.buildCreateMediaController.build(), body);
    response.status(result.statusCode).json(result);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('id') id: string,
    @Body() body: UpdateMediaDTO,
    @Res() response: Response,
  ): Promise<void> {
    const result = await controllerAdapter(this.buildUpdateMediaController.build(), { id, ...body });
    response.status(result.statusCode).json(result);
  }

  @MessagePattern('created_review')
  async listenNewReview(@Payload() review: CreatedReviewDTO, @Ctx() context: KafkaContext) {
    const result = await listenerAdapter(this.buildCalculateMediaCommunityAverageListener.build(), {
      ...review,
      operation: Operation.CREATE,
    });

    if (result.processed) {
      await handleCommitOffsetKafka(context);
    } else {
      await handleRetryKafka(context, result.error, this.logger);
    }
  }

  @MessagePattern('deleted_review')
  async listenDeleteReview(@Payload() review: CreatedReviewDTO, @Ctx() context: KafkaContext) {
    const result = await listenerAdapter(this.buildCalculateMediaCommunityAverageListener.build(), {
      ...review,
      operation: Operation.DELETE,
    });

    if (result.processed) {
      await handleCommitOffsetKafka(context);
    } else {
      await handleRetryKafka(context, result.error, this.logger);
    }
  }
}
