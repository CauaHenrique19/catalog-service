import { NestFactory } from '@nestjs/core';
import { CatalogServiceModule } from './catalog-service.module';
import { CONFIG } from 'src/config';

async function bootstrap() {
  const app = await NestFactory.create(CatalogServiceModule);
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  await app.listen(CONFIG.PORT);
}
bootstrap();
