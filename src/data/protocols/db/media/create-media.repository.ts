import { MediaModel } from '@catalog-service/domain/entities';

export interface CreateMediaRepository {
  create(parameters: CreateMediaRepository.Parameters): Promise<CreateMediaRepository.Result>;
}

export namespace CreateMediaRepository {
  export type Parameters = Omit<MediaModel, 'id'>;
  export type Result = MediaModel;
}
