import { UpdateMediaUseCase } from '@catalog-service/domain/usecases';
import { ok, serverError } from '@catalog-service/presentation/helpers/http-helper';
import { Controller, HttpResponse } from '@catalog-service/presentation/protocols';

export class UpdateMediaController implements Controller {
  constructor(private readonly updateMedia: UpdateMediaUseCase) {}

  async handle(request: UpdateMediaController.Parameters): Promise<HttpResponse> {
    try {
      const updatedMedia = await this.updateMedia.update(request);
      return ok(updatedMedia);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace UpdateMediaController {
  export type Parameters = UpdateMediaUseCase.Parameters;
}
