import { CreateMediaUseCase } from '@catalog-service/domain/usecases';
import { CreateMediaRepository } from '@catalog-service/data/protocols/db';
import { StatusEnum } from '@catalog-service/domain/enums';

export class CreateMedia implements CreateMediaUseCase {
  constructor(private readonly createMediaRepository: CreateMediaRepository) {}

  async create(parameters: CreateMediaUseCase.Parameters): Promise<CreateMediaUseCase.Result> {
    const now = new Date();

    const createdMedia = await this.createMediaRepository.create({
      name: parameters.name,
      synopsis: parameters.synopsis,
      categoryId: parameters.categoryId,
      status: StatusEnum.ACTIVE,
      createdAt: now,
    });

    return createdMedia;
  }
}
