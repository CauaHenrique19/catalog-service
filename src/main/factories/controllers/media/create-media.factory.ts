import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@catalog-service/presentation/protocols';
import { CreateMediaUseCase } from '@catalog-service/domain/usecases';
import { CREATE_MEDIA_FACTORY } from '@catalog-service/main/factories/providers';
import { CreateMediaController } from '@catalog-service/presentation/controllers';

@Injectable()
export class BuildCreateMediaController {
  constructor(
    @Inject(CREATE_MEDIA_FACTORY)
    private readonly createMedia: CreateMediaUseCase,
  ) {}

  public build(): Controller {
    const controller = new CreateMediaController(this.createMedia);
    return controller;
  }
}
