import { CategoryModel } from '@catalog-service/domain/entities';

export interface CreateCategoryUseCase {
  create(parameters: CreateCategoryUseCase.Parameters): Promise<CreateCategoryUseCase.Result>;
}

export namespace CreateCategoryUseCase {
  export type Parameters = Omit<CategoryModel, 'id' | 'status' | 'createdAt'>;
  export type Result = CategoryModel;
}
