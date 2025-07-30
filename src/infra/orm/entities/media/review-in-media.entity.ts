import { ReviewInMediaModel } from '@catalog-service/domain/entities';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { ColumnNumericTransformer } from '@catalog-service/infra/orm/transformers/numeric';
import { Media } from './media.entity';

@Entity({ name: 'tb_review_in_media' })
export class ReviewInMedia implements ReviewInMediaModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'review_id' })
  reviewId: string;

  @Column({ name: 'media_id' })
  mediaId: string;

  @Column('numeric', { precision: 4, scale: 2, transformer: new ColumnNumericTransformer() })
  stars: number;

  @Column({ name: 'review_created_at' })
  reviewCreatedAt: Date;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Media)
  @JoinColumn({ name: 'media_id' })
  media: Media;
}
