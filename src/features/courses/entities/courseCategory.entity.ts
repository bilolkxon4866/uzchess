import { Entity, Column, OneToMany} from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Course } from './course.entity';

@Entity('coursecategories')
export class CourseCategory extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @OneToMany(() => Course, (course) => course.category)
  courses!: Course[];
}