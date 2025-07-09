import { Provider } from '@nestjs/common';

import { UPDATE_MEDIA_FACTORY } from '@catalog-service/main/factories/providers';
import { UpdateMediaUseCase } from '@catalog-service/domain/usecases';
import { UpdateMedia } from '@catalog-service/data/usecases';
import { MediaRepository } from '@catalog-service/infra/orm/repositories';

export const updateMediaFactory: Provider = {
  provide: UPDATE_MEDIA_FACTORY,
  useFactory: (mediaRepository: MediaRepository): UpdateMediaUseCase => {
    return new UpdateMedia(mediaRepository);
  },
  inject: [MediaRepository],
};
