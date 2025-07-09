import {
  BuildCreateCategoryController,
  BuildFindCategoriesController,
} from '@catalog-service/main/factories/controllers';
import { FactoryModule } from '@catalog-service/main/factories/usecases/factory.module';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';

@Module({
  imports: [FactoryModule],
  controllers: [CategoryController],
  providers: [BuildCreateCategoryController, BuildFindCategoriesController],
})
export class CategoryModule {}
