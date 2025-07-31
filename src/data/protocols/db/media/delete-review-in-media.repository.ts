import { ReviewInMediaModel } from '@catalog-service/domain/entities';

export interface DeleteReviewInMediaRepository {
  delete(parameters: DeleteReviewInMediaRepository.Parameters): Promise<DeleteReviewInMediaRepository.Result>;
}

export namespace DeleteReviewInMediaRepository {
  export type Parameters = Pick<ReviewInMediaModel, 'reviewId'>;
  export type Result = void;
}
