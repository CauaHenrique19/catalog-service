import { CategoryModel } from '@catalog-service/domain/entities';

export interface FindCategoriesUseCase {
  find(parameters: FindCategoriesUseCase.Parameters): Promise<FindCategoriesUseCase.Result>;
}

export namespace FindCategoriesUseCase {
  export type Parameters = {
    name?: string;
  };
  export type Result = CategoryModel[];
}
