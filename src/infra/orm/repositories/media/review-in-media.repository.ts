import { Inject } from '@nestjs/common';
import { EntityTarget, FindOptionsWhere, Repository } from 'typeorm';

import {
  CreateReviewInMediaRepository,
  FindReviewsInMediaRepository,
} from '@catalog-service/data/protocols/db';
import { ReviewInMedia } from '@catalog-service/infra/orm/entities';
import { AppDataSource } from '@catalog-service/infra/orm/typeorm/data-source';
import { REVIEW_IN_MEDIA_REPOSITORY } from '@catalog-service/infra/orm/typeorm/typeorm.repositories';

export class ReviewInMediaRepository implements FindReviewsInMediaRepository, CreateReviewInMediaRepository {
  private readonly reviewInMediaRepository: Repository<ReviewInMedia>;

  constructor(
    @Inject(REVIEW_IN_MEDIA_REPOSITORY) private readonly ReviewInMedia: EntityTarget<ReviewInMedia>,
  ) {
    this.reviewInMediaRepository = AppDataSource.getRepository(this.ReviewInMedia);
  }

  async find(
    parameters?: FindReviewsInMediaRepository.Parameters,
  ): Promise<FindReviewsInMediaRepository.Result> {
    const where: FindOptionsWhere<ReviewInMedia> = {};

    if (parameters?.mediaId) {
      where.mediaId = parameters.mediaId;
    }

    return this.reviewInMediaRepository.find({
      where,
    });
  }

  async create(
    parameters: CreateReviewInMediaRepository.Parameters,
  ): Promise<CreateReviewInMediaRepository.Result> {
    const reviewInMedia = new ReviewInMedia();
    Object.assign(reviewInMedia, parameters);

    await this.reviewInMediaRepository.save(reviewInMedia);
    return reviewInMedia;
  }
}
