import { FindCategoriesUseCase } from '@catalog-service/domain/usecases';
import { ok, serverError } from '@catalog-service/presentation/helpers/http-helper';
import { Controller, HttpResponse } from '@catalog-service/presentation/protocols';

export class FindCategoriesController implements Controller {
  constructor(private readonly findCategories: FindCategoriesUseCase) {}

  async handle(request: FindCategoriesController.Parameters): Promise<HttpResponse> {
    try {
      const categories = await this.findCategories.find(request);
      return ok(categories);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace FindCategoriesController {
  export type Parameters = FindCategoriesUseCase.Parameters;
}
