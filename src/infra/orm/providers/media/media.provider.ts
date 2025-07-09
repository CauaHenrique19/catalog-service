import { Provider } from '@nestjs/common';

import { Media } from '@catalog-service/infra/orm/entities';
import { MEDIA_REPOSITORY } from '@catalog-service/infra/orm/typeorm/typeorm.repositories';

export const mediaProvider: Provider = {
  provide: MEDIA_REPOSITORY,
  useValue: Media,
};
