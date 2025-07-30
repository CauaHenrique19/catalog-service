import { Module } from '@nestjs/common';

import {
  CategoryRepository,
  MediaRepository,
  ReviewInMediaRepository,
} from '@catalog-service/infra/orm/repositories';
import { categoryProvider, mediaProvider, reviewInMediaProvider } from '@catalog-service/infra/orm/providers';
import {
  createCategoryFactory,
  findCategoriesFactory,
  createMediaFactory,
  findMediasFactory,
  updateMediaFactory,
  calculateMediaCommunityAverageFactory,
} from '@catalog-service/main/factories/usecases';

@Module({
  providers: [
    //repositories
    CategoryRepository,
    MediaRepository,
    ReviewInMediaRepository,

    //providers
    categoryProvider,
    mediaProvider,
    reviewInMediaProvider,

    //usecases
    createCategoryFactory,
    findCategoriesFactory,

    createMediaFactory,
    findMediasFactory,
    updateMediaFactory,
    calculateMediaCommunityAverageFactory,
  ],
  exports: [
    createCategoryFactory,
    findCategoriesFactory,

    createMediaFactory,
    findMediasFactory,
    updateMediaFactory,
    calculateMediaCommunityAverageFactory,
  ],
})
export class FactoryModule {}
