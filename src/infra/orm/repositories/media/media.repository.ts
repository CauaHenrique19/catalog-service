import { Inject } from '@nestjs/common';
import { EntityTarget, FindOptionsWhere, Repository } from 'typeorm';

import {
  CreateMediaRepository,
  FindMediaByIdRepository,
  FindMediasRepository,
} from '@catalog-service/data/protocols/db';
import { UpdateMediaUseCase } from '@catalog-service/domain/usecases';
import { MEDIA_REPOSITORY } from '@catalog-service/infra/orm/typeorm/typeorm.repositories';
import { Media } from '@catalog-service/infra/orm/entities';
import { AppDataSource } from '@catalog-service/infra/orm/typeorm/data-source';

export class MediaRepository
  implements FindMediasRepository, FindMediaByIdRepository, CreateMediaRepository, UpdateMediaUseCase
{
  private readonly mediaRepository: Repository<Media>;

  constructor(@Inject(MEDIA_REPOSITORY) private readonly Media: EntityTarget<Media>) {
    this.mediaRepository = AppDataSource.getRepository(this.Media);
  }

  find(parameters?: FindMediasRepository.Parameters): Promise<FindMediasRepository.Result> {
    const where: FindOptionsWhere<Media> = {};

    if (parameters?.name) {
      where.name = parameters.name;
    }

    return this.mediaRepository.find({
      where,
    });
  }

  findById(parameters: FindMediaByIdRepository.Parameters): Promise<FindMediaByIdRepository.Result> {
    return this.mediaRepository.findOne({
      where: {
        id: parameters.id,
      },
    });
  }

  async create(parameters: CreateMediaRepository.Parameters): Promise<CreateMediaRepository.Result> {
    const media = new Media();
    Object.assign(media, parameters);

    await this.mediaRepository.save(media);
    return media;
  }

  async update(parameters: UpdateMediaUseCase.Parameters): Promise<UpdateMediaUseCase.Result> {
    await this.mediaRepository.update(parameters.id, parameters);
    const updatedMedia = await this.mediaRepository.findOneBy({ id: parameters.id });
    return updatedMedia!;
  }
}
