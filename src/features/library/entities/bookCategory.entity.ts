import { Entity, Column, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Book } from './book.entity';
// import { Book } from './books.entity';

@Entity('bookcategory')
export class BookCategory extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @OneToMany(() => Book, (book) => book.category)
  books!: Book[];
}