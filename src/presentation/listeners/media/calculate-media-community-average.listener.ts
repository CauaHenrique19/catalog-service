import { CalculateMediaCommunityAverageUseCase } from '@catalog-service/domain/usecases';
import { Listener, ListenerResponse } from '@catalog-service/presentation/protocols';

export class CalculateMediaCommunityAverageListener implements Listener {
  constructor(
    private readonly calculateMediaCommunityAverageUseCase: CalculateMediaCommunityAverageUseCase,
  ) {}

  async listen(parameters: CalculateMediaCommunityAverageListener.Parameters): Promise<ListenerResponse> {
    try {
      await this.calculateMediaCommunityAverageUseCase.calculate({
        reviewId: parameters.id,
        mediaId: parameters.mediaId,
        stars: parameters.stars,
        reviewCreatedAt: parameters.createdAt,
      });

      return {
        processed: true,
      };
    } catch (error) {
      return {
        processed: false,
      };
    }
  }
}

export namespace CalculateMediaCommunityAverageListener {
  export type Parameters = {
    id: string;
    mediaId: string;
    stars: number;
    createdAt: Date;
  };
}
