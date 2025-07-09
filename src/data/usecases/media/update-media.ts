import { UpdateMediaUseCase } from '@catalog-service/domain/usecases';
import { UpdateMediaRepository } from '@catalog-service/data/protocols/db';

export class UpdateMedia implements UpdateMediaUseCase {
  constructor(private readonly updateMediaRepository: UpdateMediaRepository) {}

  async update(parameters: UpdateMediaUseCase.Parameters): Promise<UpdateMediaUseCase.Result> {
    const updatedMedia = await this.updateMediaRepository.update(parameters);
    return updatedMedia;
  }
}
