import { MediaModel } from '@catalog-service/domain/entities';

export interface FindMediasUseCase {
  find(parameters?: FindMediasUseCase.Parameters): Promise<FindMediasUseCase.Result>;
}

export namespace FindMediasUseCase {
  export type Parameters = Pick<MediaModel, 'name'>;
  export type Result = MediaModel[];
}
