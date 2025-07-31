import { ReviewInMediaModel } from '@catalog-service/domain/entities';

export interface CalculateMediaCommunityAverageUseCase {
  calculate(
    parameters: CalculateMediaCommunityAverageUseCase.Parameters,
  ): Promise<CalculateMediaCommunityAverageUseCase.Result>;
}

export enum Operation {
  CREATE = 'create',
  DELETE = 'delete',
}
export namespace CalculateMediaCommunityAverageUseCase {
  export type Parameters = Pick<ReviewInMediaModel, 'reviewId' | 'mediaId' | 'stars' | 'reviewCreatedAt'> & {
    operation: Operation;
  };
  export type Result = void;
}
