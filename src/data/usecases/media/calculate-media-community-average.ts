import {
  CreateReviewInMediaRepository,
  FindReviewsInMediaRepository,
  UpdateMediaRepository,
} from '@catalog-service/data/protocols/db';
import { CalculateMediaCommunityAverageUseCase } from '@catalog-service/domain/usecases';

export class CalculateMediaCommunityAverage implements CalculateMediaCommunityAverageUseCase {
  constructor(
    private readonly findReviewsInMediaRepository: FindReviewsInMediaRepository,
    private readonly createReviewInMediaRepository: CreateReviewInMediaRepository,
    private readonly updateMediaRepository: UpdateMediaRepository,
  ) {}

  async calculate(
    parameters: CalculateMediaCommunityAverageUseCase.Parameters,
  ): Promise<CalculateMediaCommunityAverageUseCase.Result> {
    await this.createReviewInMediaRepository.create({
      mediaId: parameters.mediaId,
      reviewId: parameters.reviewId,
      reviewCreatedAt: parameters.reviewCreatedAt,
      stars: parameters.stars,
      createdAt: new Date(),
    });

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
