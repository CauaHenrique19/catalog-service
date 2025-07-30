import { Provider } from '@nestjs/common';

import { CALCULATE_MEDIA_COMMUNITY_AVERAGE_FACTORY } from '@catalog-service/main/factories/providers';
import { CalculateMediaCommunityAverageUseCase } from '@catalog-service/domain/usecases';
import { CalculateMediaCommunityAverage } from '@catalog-service/data/usecases';
import { MediaRepository, ReviewInMediaRepository } from '@catalog-service/infra/orm/repositories';

export const calculateMediaCommunityAverageFactory: Provider = {
  provide: CALCULATE_MEDIA_COMMUNITY_AVERAGE_FACTORY,
  useFactory: (
    reviewInMediaRepository: ReviewInMediaRepository,
    mediaRepository: MediaRepository,
  ): CalculateMediaCommunityAverageUseCase => {
    return new CalculateMediaCommunityAverage(
      reviewInMediaRepository,
      reviewInMediaRepository,
      mediaRepository,
    );
  },
  inject: [ReviewInMediaRepository, MediaRepository],
};
