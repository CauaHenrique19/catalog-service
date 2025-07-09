import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@catalog-service/presentation/protocols';
import { UpdateMediaUseCase } from '@catalog-service/domain/usecases';
import { UPDATE_MEDIA_FACTORY } from '@catalog-service/main/factories/providers';
import { UpdateMediaController } from '@catalog-service/presentation/controllers';

@Injectable()
export class BuildUpdateMediaController {
  constructor(
    @Inject(UPDATE_MEDIA_FACTORY)
    private readonly updateMedia: UpdateMediaUseCase,
  ) {}

  public build(): Controller {
    const controller = new UpdateMediaController(this.updateMedia);
    return controller;
  }
}
