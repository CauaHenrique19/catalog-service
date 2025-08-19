import { StatusEnum } from '@catalog-service/domain/enums';

export interface MediaModel {
  id: string;
  name: string;
  synopsis: string;
  categoryId: string;
  sumStars?: number;
  amountReviews?: number;
  communityAverage?: number;
  status: StatusEnum;
  createdAt: Date;
}
