import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('reportCategories')
export class ReportCategory extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @Column({ nullable: true })
  order!: number;
}