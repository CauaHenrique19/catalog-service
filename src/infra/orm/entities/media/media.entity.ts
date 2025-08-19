import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import { MediaModel } from '@catalog-service/domain/entities';
import { StatusEnum } from '@catalog-service/domain/enums';
import { Category } from '@catalog-service/infra/orm/entities';
import { ColumnNumericTransformer } from '@catalog-service/infra/orm/transformers';

@Entity({ name: 'tb_media' })
export class Media implements MediaModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'category_id' })
  categoryId: string;

  @Column()
  synopsis: string;

  @Column({ name: 'sum_stars', type: 'bigint', nullable: true, transformer: new ColumnNumericTransformer() })
  sumStars?: number;

  @Column({
    name: 'amount_reviews',
    type: 'bigint',
    nullable: true,
    transformer: new ColumnNumericTransformer(),
  })
  amountReviews?: number;

  @Column({
    name: 'community_average',
    type: 'decimal',
    nullable: true,
    transformer: new ColumnNumericTransformer(),
  })
  communityAverage?: number;

  @Column({
    type: 'enum',
    enum: StatusEnum,
  })
  status: StatusEnum;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @OneToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
