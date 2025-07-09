import { Provider } from '@nestjs/common';

import { CREATE_CATEGORY_FACTORY } from '@catalog-service/main/factories/providers';
import { CreateCategoryUseCase } from '@catalog-service/domain/usecases';
import { CreateCategory } from '@catalog-service/data/usecases';
import { CategoryRepository } from '@catalog-service/infra/orm/repositories';

export const createCategoryFactory: Provider = {
  provide: CREATE_CATEGORY_FACTORY,
  useFactory: (categoryRepository: CategoryRepository): CreateCategoryUseCase => {
    return new CreateCategory(categoryRepository);
  },
  inject: [CategoryRepository],
};
