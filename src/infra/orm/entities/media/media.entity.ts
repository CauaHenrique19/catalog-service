import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import { MediaModel } from '@catalog-service/domain/entities';
import { StatusEnum } from '@catalog-service/domain/enums';
import { Category } from '../category';

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

  @Column({ name: 'community_average', type: 'decimal', nullable: true })
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
