import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { CategoryModel } from '@catalog-service/domain/entities';
import { StatusEnum } from '@catalog-service/domain/enums';

@Entity({ name: 'tb_category' })
export class Category implements CategoryModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  icon: string;

  @Column({
    type: 'enum',
    enum: StatusEnum,
  })
  status: StatusEnum;

  @Column({ name: 'created_at' })
  createdAt: Date;
}
