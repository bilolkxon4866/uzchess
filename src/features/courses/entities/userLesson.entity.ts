import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { CourseLesson } from './courseLesson.entity';
import { User } from '../../auth/entities/users.entity';

@Entity('users_lessons')
export class UserLesson extends BaseModel {

  @Column()
  userid! : number

  @Column()
  CourseLessonId! : number

  @Column({ nullable: true })
  stoppedAt!: number;

  @Column({ default: false })
  isCompleted!: boolean;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => CourseLesson)
  courseLesson!: CourseLesson;
}