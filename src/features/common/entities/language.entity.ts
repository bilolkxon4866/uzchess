import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('languages')
export class Language extends BaseModel {
  @Column({ length: 32, unique: true })
  title!: string;

  @Column({ length: 2, unique: true })
  code!: string;
}