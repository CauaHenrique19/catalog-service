import { FindCategoriesRepository } from '@catalog-service/data/protocols/db';
import { FindCategoriesUseCase } from '@catalog-service/domain/usecases';

export class FindCategories implements FindCategoriesUseCase {
  constructor(private readonly findCategoriesRepository: FindCategoriesRepository) {}

  async find(parameters: FindCategoriesUseCase.Parameters): Promise<FindCategoriesUseCase.Result> {
    return await this.findCategoriesRepository.find(parameters);
  }
}
