import { Allow, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseUpdateAdminDto{
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  authorId? : number

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  categoryId? : number

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  languageId?:number

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  difficultyId? : number

  @IsString()
  @ApiProperty()
  @IsOptional()
  @MaxLength(128)
  title? : string

  @IsString()
  @IsOptional()
  @Allow()
  @ApiProperty({type : 'string' , format : 'binary'})
  image? : string

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  price? : number

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  newPrice? : number

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  reviewsCount? : number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  rating?:number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  sectionCount? : number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  lessonsCount? : number
}