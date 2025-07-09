import { MediaModel } from '@catalog-service/domain/entities';

export interface CreateMediaUseCase {
  create(parameters: CreateMediaUseCase.Parameters): Promise<CreateMediaUseCase.Result>;
}

export namespace CreateMediaUseCase {
  export type Parameters = Pick<MediaModel, 'name' | 'synopsis' | 'categoryId'>;
  export type Result = MediaModel;
}
