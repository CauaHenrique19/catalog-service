import { CreateMediaUseCase } from '@catalog-service/domain/usecases';
import { createdSuccess, serverError } from '@catalog-service/presentation/helpers/http-helper';
import { Controller, HttpResponse } from '@catalog-service/presentation/protocols';

export class CreateMediaController implements Controller {
  constructor(private readonly createMedia: CreateMediaUseCase) {}

  async handle(request: CreateMediaController.Parameters): Promise<HttpResponse> {
    try {
      const createdMedia = await this.createMedia.create(request);
      return createdSuccess(createdMedia);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace CreateMediaController {
  export type Parameters = CreateMediaUseCase.Parameters;
}
