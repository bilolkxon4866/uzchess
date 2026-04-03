import { Entity, Column, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { Book } from '../../library/entities/book.entity';

@Entity('author')
export class Author extends BaseModel {
  @Column({ length: 64 })
  fullName!: string;

  @OneToMany(() => Course, (course) => course.author)
  courses!: Course[];

  @OneToMany(() => Book, (book) => book.author)
  books!: Book[];
}