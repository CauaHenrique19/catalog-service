import { Inject, Injectable } from '@nestjs/common';
import { FIND_CATEGORIES_FACTORY } from '../../providers';
import { FindCategoriesUseCase } from '@catalog-service/domain/usecases';
import { Controller } from '@catalog-service/presentation/protocols';
import { FindCategoriesController } from '@catalog-service/presentation/controllers';

@Injectable()
export class BuildFindCategoriesController {
  constructor(@Inject(FIND_CATEGORIES_FACTORY) private readonly findCategories: FindCategoriesUseCase) {}

  public build(): Controller {
    const controller = new FindCategoriesController(this.findCategories);
    return controller;
  }
}
