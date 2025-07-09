import { Provider } from '@nestjs/common';

import { FIND_CATEGORIES_FACTORY } from '@catalog-service/main/factories/providers';
import { CategoryRepository } from '@catalog-service/infra/orm/repositories';
import { FindCategoriesUseCase } from '@catalog-service/domain/usecases';
import { FindCategories } from '@catalog-service/data/usecases';

export const findCategoriesFactory: Provider = {
  provide: FIND_CATEGORIES_FACTORY,
  useFactory: (categoryRepository: CategoryRepository): FindCategoriesUseCase => {
    return new FindCategories(categoryRepository);
  },
  inject: [CategoryRepository],
};
