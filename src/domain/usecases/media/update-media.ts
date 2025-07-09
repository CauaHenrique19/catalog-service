import { MediaModel } from '@catalog-service/domain/entities';

export interface UpdateMediaUseCase {
  update(parameters: UpdateMediaUseCase.Parameters): Promise<UpdateMediaUseCase.Result>;
}

export namespace UpdateMediaUseCase {
  export type Parameters = Pick<MediaModel, 'id'> &
    Partial<Pick<MediaModel, 'name' | 'synopsis' | 'categoryId' | 'status'>>;
  export type Result = MediaModel;
}
