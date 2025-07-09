import { MediaModel } from '@catalog-service/domain/entities';

export interface UpdateMediaRepository {
  update(parameters: UpdateMediaRepository.Parameters): Promise<UpdateMediaRepository.Result>;
}

export namespace UpdateMediaRepository {
  export type Parameters = Pick<MediaModel, 'id'> &
    Partial<Pick<MediaModel, 'name' | 'synopsis' | 'categoryId' | 'status'>>;
  export type Result = MediaModel;
}
