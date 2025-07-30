import { ReviewInMediaModel } from '@catalog-service/domain/entities';

export interface CalculateMediaCommunityAverageUseCase {
  calculate(
    parameters: CalculateMediaCommunityAverageUseCase.Parameters,
  ): Promise<CalculateMediaCommunityAverageUseCase.Result>;
}

export namespace CalculateMediaCommunityAverageUseCase {
  export type Parameters = Pick<ReviewInMediaModel, 'reviewId' | 'mediaId' | 'stars' | 'reviewCreatedAt'>;
  export type Result = void;
}
