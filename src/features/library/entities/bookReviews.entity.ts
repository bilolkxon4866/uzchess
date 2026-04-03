import { Entity,  Column, ManyToOne } from 'typeorm';
import { User } from '../../auth/entities/users.entity';
import { Book } from './book.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('bookReviews')
export class BookReview extends BaseModel {
  @Column()
  userId! : number

  @Column()
  bookId! : number

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment!: string;

  @Column({ type: 'timestamp' })
  date!: Date;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Book)
  book!: Book;
}