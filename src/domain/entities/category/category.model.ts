import { StatusEnum } from '@catalog-service/domain/enums';

export interface CategoryModel {
  id: string;
  name: string;
  color: string;
  icon: string;
  status: StatusEnum;
  createdAt: Date;
}
