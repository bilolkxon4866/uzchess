import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CourseListAdminDto{

  @Expose()
  @ApiProperty()
  id! : number

  @Expose()
  @ApiProperty()
  authorId! : number

  @Expose()
  @ApiProperty()
  categoryId! : number

  @Expose()
  @ApiProperty()
  languageId!:number

  @Expose()
  @ApiProperty()
  difficultyId! : number

  @Expose()
  @ApiProperty()
  title! : string

  @Expose()
  @ApiProperty()
  image! : string

  @Expose()
  @ApiProperty()
  price! : number

  @Expose()
  @ApiProperty()
  newPrice? : number

  @Expose()
  @ApiProperty()
  reviewsCount! : number

  @Expose()
  @ApiProperty()
  rating?:number

  @Expose()
  @ApiProperty()
  sectionCount! : number

  @Expose()
  @ApiProperty()
  lessonsCount!: number

  @Expose()
  @ApiProperty()
  isLike!: boolean
}