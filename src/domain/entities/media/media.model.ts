import { StatusEnum } from '@catalog-service/domain/enums';

export interface MediaModel {
  id: string;
  name: string;
  synopsis: string;
  categoryId: string;
  status: StatusEnum;
  createdAt: Date;
}
