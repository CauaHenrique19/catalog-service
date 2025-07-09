import { FindMediasUseCase } from '@catalog-service/domain/usecases';
import { FindMediasRepository } from '@catalog-service/data/protocols/db';

export class FindMedias implements FindMediasUseCase {
  constructor(private readonly findMediasRepository: FindMediasRepository) {}

  async find(parameters?: FindMediasUseCase.Parameters): Promise<FindMediasUseCase.Result> {
    const medias = await this.findMediasRepository.find(parameters);
    return medias;
  }
}
