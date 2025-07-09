import { Provider } from '@nestjs/common';

import { Category } from '@catalog-service/infra/orm/entities';
import { CATEGORY_REPOSITORY } from '@catalog-service/infra/orm/typeorm/typeorm.repositories';

export const categoryProvider: Provider = {
  provide: CATEGORY_REPOSITORY,
  useValue: Category,
};
