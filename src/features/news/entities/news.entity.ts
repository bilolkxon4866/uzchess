import { Entity, Column } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('news')
export class News extends BaseModel {
  @Column({ length: 256 })
  title!: string;

  @Column({ length: 128 ,nullable : true})
  image!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'timestamp' })
  date!: string;
}