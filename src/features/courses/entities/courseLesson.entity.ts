import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Course } from './course.entity';
import { CourseSection } from './courseSection.entity';
import { Difficulty } from '../../common/entities/difficulty.entity';

@Entity('courseLesson')
export class CourseLesson extends BaseModel {
  @Column()
  courseId!: number;

  @Column({ nullable: true })
  difficultyId!: number;

  @Column()
  courseSectionId!: number

  @Column({ length: 28 })
  title!: string;

  @Column({type: 'text', nullable: true})
  content!: string

  @Column({ length: 128, nullable: true })
  thumbnail!: string;

  @Column({length: 256})
  video!:string

  @Column({nullable: true})
  order!: number

  @Column({type:"timestamp"})
  data!: Date

  @Column({default: false})
  isFree!: boolean

  @ManyToOne(() => Course)
  course!: Course;

  @ManyToOne(() => CourseSection, (section) => section.lessons)
  courseSection!: CourseSection;

  @ManyToOne(() => Difficulty, (difficult) => difficult.courseLessons)
  difficulty!: Difficulty;
}