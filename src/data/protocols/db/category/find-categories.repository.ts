import { CategoryModel } from '@catalog-service/domain/entities';

export interface FindCategoriesRepository {
  find(parameters?: FindCategoriesRepository.Parameters): Promise<FindCategoriesRepository.Result>;
}

export namespace FindCategoriesRepository {
  export type Parameters = {
    name?: string;
  };
  export type Result = CategoryModel[];
}
