import { MediaModel } from '@catalog-service/domain/entities';

export interface FindMediaByIdRepository {
  findById(parameters: FindMediaByIdRepository.Parameters): Promise<FindMediaByIdRepository.Result>;
}

export namespace FindMediaByIdRepository {
  export type Parameters = Pick<MediaModel, 'id'>;
  export type Result = MediaModel | null;
}
