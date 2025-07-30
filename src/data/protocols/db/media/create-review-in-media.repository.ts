import { ReviewInMediaModel } from '@catalog-service/domain/entities';

export interface CreateReviewInMediaRepository {
  create(parameters: CreateReviewInMediaRepository.Parameters): Promise<CreateReviewInMediaRepository.Result>;
}

export namespace CreateReviewInMediaRepository {
  export type Parameters = Omit<ReviewInMediaModel, 'id'>;
  export type Result = ReviewInMediaModel;
}
