import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { User } from '../../auth/entities/users.entity';
import { Course } from './course.entity';

@Entity('courseReviews')
export class CourseReview extends BaseModel {
  @Column()
  userId! : number

  @Column()
  courseId! : number

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment!: string;

  @Column({ type: 'timestamp' })
  date!: Date;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Course)
  course!: Course;
}