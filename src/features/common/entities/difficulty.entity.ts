import { Entity, Column, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { CourseLesson } from '../../courses/entities/courseLesson.entity';

@Entity('difficulties')
export class Difficulty extends BaseModel{
  @Column({ length: 32, unique: true })
  title!: string;

  @Column({ length: 128 ,nullable : true})
  icon!: string;

  @OneToMany(() => CourseLesson, (lessons) => lessons.difficulty)
  courseLessons!: CourseLesson[]
}