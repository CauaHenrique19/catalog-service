import { MediaModel } from '@catalog-service/domain/entities';

export interface FindMediasRepository {
  find(parameters?: FindMediasRepository.Parameters): Promise<FindMediasRepository.Result>;
}

export namespace FindMediasRepository {
  export type Parameters = Pick<MediaModel, 'name'>;
  export type Result = MediaModel[];
}
