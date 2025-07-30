import {
  BuildCreateMediaController,
  BuildFindMediasController,
  BuildUpdateMediaController,
} from '@catalog-service/main/factories/controllers';
import { FactoryModule } from '@catalog-service/main/factories/usecases/factory.module';
import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { BuildCalculateMediaCommunityAverageListener } from '@catalog-service/main/factories/listeners';

@Module({
  imports: [FactoryModule],
  controllers: [MediaController],
  providers: [
    BuildCreateMediaController,
    BuildFindMediasController,
    BuildUpdateMediaController,
    BuildCalculateMediaCommunityAverageListener,
  ],
})
export class MediaModule {}
