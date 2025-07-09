import { CreateCategoryRepository } from '@catalog-service/data/protocols/db';
import { StatusEnum } from '@catalog-service/domain/enums';
import { CreateCategoryUseCase } from '@catalog-service/domain/usecases';

export class CreateCategory implements CreateCategoryUseCase {
  constructor(private readonly createCategoryRepository: CreateCategoryRepository) {}

  async create(parameters: CreateCategoryUseCase.Parameters): Promise<CreateCategoryUseCase.Result> {
    const now = new Date();

    const createdCategory = await this.createCategoryRepository.create({
      ...parameters,
      status: StatusEnum.ACTIVE,
      createdAt: now,
    });

    return createdCategory;
  }
}
