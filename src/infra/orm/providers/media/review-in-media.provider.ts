import { Provider } from '@nestjs/common';

import { ReviewInMedia } from '@catalog-service/infra/orm/entities';
import { REVIEW_IN_MEDIA_REPOSITORY } from '@catalog-service/infra/orm/typeorm/typeorm.repositories';

export const reviewInMediaProvider: Provider = {
  provide: REVIEW_IN_MEDIA_REPOSITORY,
  useValue: ReviewInMedia,
};
