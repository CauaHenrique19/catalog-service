import { FindMediasUseCase } from '@catalog-service/domain/usecases';
import { ok, serverError } from '@catalog-service/presentation/helpers/http-helper';
import { Controller, HttpResponse } from '@catalog-service/presentation/protocols';

export class FindMediasController implements Controller {
  constructor(private readonly findMedias: FindMediasUseCase) {}

  async handle(request: FindMediasController.Parameters): Promise<HttpResponse> {
    try {
      const medias = await this.findMedias.find(request);
      return ok(medias);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace FindMediasController {
  export type Parameters = FindMediasUseCase.Parameters;
}
