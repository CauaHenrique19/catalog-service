import {
  CreateReviewInMediaRepository,
  DeleteReviewInMediaRepository,
  FindMediaByIdRepository,
  UpdateMediaRepository,
} from '@catalog-service/data/protocols/db';
import { MediaNotFoundError } from '@catalog-service/domain/errors';
import { CalculateMediaCommunityAverageUseCase, Operation } from '@catalog-service/domain/usecases';

export class CalculateMediaCommunityAverage implements CalculateMediaCommunityAverageUseCase {
  constructor(
    private readonly findMediaByIdRepository: FindMediaByIdRepository,
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

    const media = await this.findMediaByIdRepository.findById({ id: parameters.mediaId });
    if (!media) {
      throw new MediaNotFoundError();
    }

    const starsSum = media.sumStars ? (media.sumStars += parameters.stars) : parameters.stars;
    const totalReviews = media.amountReviews ? (media.amountReviews += 1) : 1;
    const average = starsSum / totalReviews;

    await this.updateMediaRepository.update({
      id: parameters.mediaId,
      sumStars: starsSum,
      amountReviews: totalReviews,
      communityAverage: average,
    });
  }
}
