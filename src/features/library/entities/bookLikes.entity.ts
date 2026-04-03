import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from '../../auth/entities/users.entity';
import { Book } from './book.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('bookLikes')
export class BookLike extends BaseModel {
  @Column()
  userId! : number

  @Column()
  bookId! : number

  @Column({ type: 'timestamp' })
  date!: Date;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Book)
  book!: Book;
}