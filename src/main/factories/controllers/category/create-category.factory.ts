import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@catalog-service/presentation/protocols';
import { CreateCategoryUseCase } from '@catalog-service/domain/usecases';
import { CREATE_CATEGORY_FACTORY } from '@catalog-service/main/factories/providers';
import { CreateCategoryController } from '@catalog-service/presentation/controllers';

@Injectable()
export class BuildCreateCategoryController {
  constructor(
    @Inject(CREATE_CATEGORY_FACTORY)
    private readonly createCategory: CreateCategoryUseCase,
  ) {}

  public build(): Controller {
    const controller = new CreateCategoryController(this.createCategory);
    return controller;
  }
}
