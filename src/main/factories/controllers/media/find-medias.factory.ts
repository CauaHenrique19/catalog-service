import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@catalog-service/presentation/protocols';
import { FindMediasUseCase } from '@catalog-service/domain/usecases';
import { FIND_MEDIAS_FACTORY } from '@catalog-service/main/factories/providers';
import { FindMediasController } from '@catalog-service/presentation/controllers';

@Injectable()
export class BuildFindMediasController {
  constructor(
    @Inject(FIND_MEDIAS_FACTORY)
    private readonly findMedias: FindMediasUseCase,
  ) {}

  public build(): Controller {
    const controller = new FindMediasController(this.findMedias);
    return controller;
  }
}
