import { Module } from '@nestjs/common';

import { TypeormModule } from '@catalog-service/infra/orm/typeorm/typeorm.module';
import { CategoryModule } from '@catalog-service/main/controllers/category/category.module';
import { MediaModule } from '@catalog-service/main/controllers/media/media.module';

@Module({
  imports: [TypeormModule, CategoryModule, MediaModule],
})
export class CatalogServiceModule {}
