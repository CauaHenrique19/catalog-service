import { Body, Controller, Get, Post, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';

import { controllerAdapter } from '@catalog-service/main/adapters/controller.adpter';
import {
  BuildCreateCategoryController,
  BuildFindCategoriesController,
} from '@catalog-service/main/factories/controllers';
import { CreateCategoryDTO, FindCategoriesDTO } from '@catalog-service/main/controllers/category/dto';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly buildFindCategoriesController: BuildFindCategoriesController,
    private readonly buildCreateCategoryController: BuildCreateCategoryController,
  ) {}

  @Get()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async find(@Query() query: FindCategoriesDTO, @Res() response: Response): Promise<void> {
    const result = await controllerAdapter(this.buildFindCategoriesController.build(), query);
    response.status(result.statusCode).json(result);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() body: CreateCategoryDTO, @Res() response: Response): Promise<void> {
    const result = await controllerAdapter(this.buildCreateCategoryController.build(), body);
    response.status(result.statusCode).json(result);
  }
}
