import { Module } from '@nestjs/common';

import { CategoryRepository, MediaRepository } from '@catalog-service/infra/orm/repositories';
import { categoryProvider, mediaProvider } from '@catalog-service/infra/orm/providers';
import {
  createCategoryFactory,
  findCategoriesFactory,
  createMediaFactory,
  findMediasFactory,
  updateMediaFactory,
} from '@catalog-service/main/factories/usecases';

@Module({
  providers: [
    //repositories
    CategoryRepository,
    MediaRepository,

    //providers
    categoryProvider,
    mediaProvider,

    //usecases
    createCategoryFactory,
    findCategoriesFactory,

    createMediaFactory,
    findMediasFactory,
    updateMediaFactory,
  ],
  exports: [
    createCategoryFactory,
    findCategoriesFactory,

    createMediaFactory,
    findMediasFactory,
    updateMediaFactory,
  ],
})
export class FactoryModule {}
