import { Allow, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CoursesCreateAdminDto{
  @IsNumber()
  @ApiProperty()
  authorId! : number

  @IsNumber()
  @ApiProperty()
  categoryId! : number

  @IsNumber()
  @ApiProperty()
  languageId!:number

  @IsNumber()
  @ApiProperty()
  difficultyId! : number

  @IsString()
  @ApiProperty()
  @MaxLength(128)
  title! : string

  @IsString()
  @Allow()
  @ApiProperty({type : 'string' , format : 'binary'})
  image! : string

  @IsNumber()
  @ApiProperty()
  price! : number

  @IsNumber()
  @ApiProperty()
  newPrice? : number

  @IsNumber()
  @ApiProperty()
  reviewsCount! : number

  @IsNumber()
  @ApiProperty()
  rating?:number

  @IsNumber()
  @ApiProperty()
  sectionCount! : number

  @IsNumber()
  @ApiProperty()
  lessonsCount!: number
}