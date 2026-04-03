import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { User } from '../../auth/entities/users.entity';
import { Course } from './course.entity';

@Entity('purchasedCourses')
export class PurchasedCourse extends BaseModel {
  @Column()
  userId! : number

  @Column()
  courseId! : number

  @Column({ default: false })
  isCompleted!: boolean;

  @Column({ type: 'timestamp' })
  date!: Date;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Course)
  course!: Course;
}