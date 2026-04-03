import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { CourseCategory } from './courseCategory.entity';
import { Language } from '../../common/entities/language.entity';
import { CourseSection } from './courseSection.entity';
import { Difficulty } from '../../common/entities/difficulty.entity';
import { Author } from '../../common/entities/author.entity';
import { CourseLike } from './courseLikes.entity';

@Entity('courses')
export class Course extends BaseModel {
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

  @Column({ length: 128 })
  image!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  newPrice!: number;

  @Column({ default: 0 })
  reviewsCount!: number;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating!: number;

  @Column({ default: 0 })
  sectionsCount!: number;

  @Column({ default: 0 })
  lessonsCount!: number;

  isLike? : boolean

  @ManyToOne(() => Author, (author) => author.courses)
  author!: Author;

  @ManyToOne(() => CourseCategory, (cat) => cat.courses)
  category!: CourseCategory;

  @ManyToOne(() => Language)
  language!: Language;

  @OneToMany(() => CourseLike, (like) => like.course)
  likes? :CourseLike[]

  @ManyToOne(() => Difficulty)
  difficulty!: Difficulty;

  @OneToMany(() => CourseSection, (section) => section.course)
  sections!: CourseSection[];
}