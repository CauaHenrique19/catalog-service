import { Inject, Injectable } from '@nestjs/common';

import { Listener } from '@catalog-service/presentation/protocols';
import { CalculateMediaCommunityAverageUseCase } from '@catalog-service/domain/usecases';
import { CALCULATE_MEDIA_COMMUNITY_AVERAGE_FACTORY } from '@catalog-service/main/factories/providers';
import { CalculateMediaCommunityAverageListener } from '@catalog-service/presentation/listeners';

@Injectable()
export class BuildCalculateMediaCommunityAverageListener {
  constructor(
    @Inject(CALCULATE_MEDIA_COMMUNITY_AVERAGE_FACTORY)
    private readonly calculateMediaCommunityAverageUseCase: CalculateMediaCommunityAverageUseCase,
  ) {}

  public build(): Listener {
    const listener = new CalculateMediaCommunityAverageListener(this.calculateMediaCommunityAverageUseCase);
    return listener;
  }
}
