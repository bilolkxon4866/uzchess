import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Difficulty } from '../../common/entities/difficulty.entity';
import { BookCategory } from './bookCategory.entity';
import { Language } from '../../common/entities/language.entity';
import { Author } from '../../common/entities/author.entity';

@Entity('books')
export class Book extends BaseModel {
  @Column()
  authorId!: number;

  @Column()
  categoryId!: number;

  @Column()
  languageId!: number;

  @Column()
  difficultyId!: number;

  @Column({ length: 128 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ length: 128, nullable: true })
  image!: string;

  @Column({ type: 'decimal' })
  price!: number;

  @Column({ type: 'decimal', nullable: true })
  newPrice!: number;

  @Column({ type: 'decimal', nullable: true, default: 0 })
  rating!: number;

  @Column({ default: 0 })
  reviewCount!: number;

  @Column()
  pages!: number;

  @Column({ type: 'date' })
  pubDate!: Date;

  @ManyToOne(() => Author)
  author!: Author;

  @ManyToOne(() => BookCategory)
  category!: BookCategory;

  @ManyToOne(() => Language)
  language!: Language;

  @ManyToOne(() => Difficulty)
  difficulty!: Difficulty;
}