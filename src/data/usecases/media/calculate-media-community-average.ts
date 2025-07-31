import {
  CreateReviewInMediaRepository,
  DeleteReviewInMediaRepository,
  FindReviewsInMediaRepository,
  UpdateMediaRepository,
} from '@catalog-service/data/protocols/db';
import { CalculateMediaCommunityAverageUseCase, Operation } from '@catalog-service/domain/usecases';

export class CalculateMediaCommunityAverage implements CalculateMediaCommunityAverageUseCase {
  constructor(
    private readonly findReviewsInMediaRepository: FindReviewsInMediaRepository,
    private readonly createReviewInMediaRepository: CreateReviewInMediaRepository,
    private readonly deleteReviewInMediaRepository: DeleteReviewInMediaRepository,
    private readonly updateMediaRepository: UpdateMediaRepository,
  ) {}

  async calculate(
    parameters: CalculateMediaCommunityAverageUseCase.Parameters,
  ): Promise<CalculateMediaCommunityAverageUseCase.Result> {
    if (parameters.operation === Operation.CREATE) {
      await this.createReviewInMediaRepository.create({
        mediaId: parameters.mediaId,
        reviewId: parameters.reviewId,
        reviewCreatedAt: parameters.reviewCreatedAt,
        stars: parameters.stars,
        createdAt: new Date(),
      });
    } else {
      await this.deleteReviewInMediaRepository.delete({
        reviewId: parameters.reviewId,
      });
    }

    const reviews = await this.findReviewsInMediaRepository.find({
      mediaId: parameters.mediaId,
    });

    const starsSum = reviews.reduce((accumulated, review) => (review.stars += accumulated), 0);
    const totalReviews = reviews.length;
    const average = starsSum / totalReviews;

    await this.updateMediaRepository.update({
      id: parameters.mediaId,
      communityAverage: average,
    });
  }
}
