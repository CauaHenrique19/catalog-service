import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';

import { controllerAdapter } from '@catalog-service/main/adapters/controller.adpter';
import {
  BuildCreateMediaController,
  BuildFindMediasController,
  BuildUpdateMediaController,
} from '@catalog-service/main/factories/controllers';
import { CreateMediaDTO, FindMediasDTO, UpdateMediaDTO } from '@catalog-service/main/controllers/media/dto';

@Controller('media')
export class MediaController {
  constructor(
    private readonly buildFindMediasController: BuildFindMediasController,
    private readonly buildCreateMediaController: BuildCreateMediaController,
    private readonly buildUpdateMediaController: BuildUpdateMediaController,
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
}
