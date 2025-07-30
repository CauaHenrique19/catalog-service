import { ReviewInMediaModel } from '@catalog-service/domain/entities';

export interface FindReviewsInMediaRepository {
  find(parameters?: FindReviewsInMediaRepository.Parameters): Promise<FindReviewsInMediaRepository.Result>;
}

export namespace FindReviewsInMediaRepository {
  export type Parameters = Partial<Pick<ReviewInMediaModel, 'mediaId'>>;
  export type Result = ReviewInMediaModel[];
}
