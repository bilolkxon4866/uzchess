import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { CourseLesson } from './courseLesson.entity';
import { Course } from './course.entity';

@Entity('coursesections')
export class CourseSection extends BaseModel {
  @Column({ length: 256 })
  title!: string;

  @Column()
  courseId! : number

  @Column({ nullable: true })
  order!: number;

  @Column({ type: 'timestamp' })
  date!: Date;

  @ManyToOne(() => Course, (course) => course.sections)
  course!: Course;

  @OneToMany(() => CourseLesson, (lesson) => lesson.courseSection)
  lessons!: CourseLesson[];
}