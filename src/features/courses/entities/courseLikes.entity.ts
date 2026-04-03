import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { User } from '../../auth/entities/users.entity';
import { Course } from './course.entity';

@Entity('courseLikes')
export class CourseLike extends BaseModel {
  @Column()
  userId! : number

  @Column()
  courseId! : number

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Course,(course) => course.likes)
  course!: Course;
}