import { CategoryModel } from '@catalog-service/domain/entities';

export interface CreateCategoryRepository {
  create(parameters: CreateCategoryRepository.Parameters): Promise<CreateCategoryRepository.Result>;
}

export namespace CreateCategoryRepository {
  export type Parameters = Omit<CategoryModel, 'id'>;
  export type Result = CategoryModel;
}
