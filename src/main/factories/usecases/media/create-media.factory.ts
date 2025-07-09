import { Provider } from '@nestjs/common';

import { CREATE_MEDIA_FACTORY } from '@catalog-service/main/factories/providers';
import { CreateMediaUseCase } from '@catalog-service/domain/usecases';
import { CreateMedia } from '@catalog-service/data/usecases';
import { MediaRepository } from '@catalog-service/infra/orm/repositories';

export const createMediaFactory: Provider = {
  provide: CREATE_MEDIA_FACTORY,
  useFactory: (mediaRepository: MediaRepository): CreateMediaUseCase => {
    return new CreateMedia(mediaRepository);
  },
  inject: [MediaRepository],
};
