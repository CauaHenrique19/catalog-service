import { Provider } from '@nestjs/common';

import { FIND_MEDIAS_FACTORY } from '@catalog-service/main/factories/providers';
import { FindMediasUseCase } from '@catalog-service/domain/usecases';
import { FindMedias } from '@catalog-service/data/usecases';
import { MediaRepository } from '@catalog-service/infra/orm/repositories';

export const findMediasFactory: Provider = {
  provide: FIND_MEDIAS_FACTORY,
  useFactory: (mediaRepository: MediaRepository): FindMediasUseCase => {
    return new FindMedias(mediaRepository);
  },
  inject: [MediaRepository],
};
