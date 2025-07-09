import { CreateCategoryUseCase } from '@catalog-service/domain/usecases';
import { createdSuccess, serverError } from '@catalog-service/presentation/helpers/http-helper';
import { Controller, HttpResponse } from '@catalog-service/presentation/protocols';

export class CreateCategoryController implements Controller {
  constructor(private readonly createCategory: CreateCategoryUseCase) {}

  async handle(request: CreateCategoryController.Parameters): Promise<HttpResponse> {
    try {
      const createdCategory = await this.createCategory.create(request);
      return createdSuccess(createdCategory);
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export namespace CreateCategoryController {
  export type Parameters = CreateCategoryUseCase.Parameters;
}
