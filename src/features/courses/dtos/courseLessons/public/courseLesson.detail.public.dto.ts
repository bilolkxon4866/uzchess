import {IsOptional} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';


export class CourseLessonDetailPublicDto {
  @Expose()
  @ApiProperty()
  id!: number

  @ApiProperty()
  @Expose()
  courseId! : number

  @ApiProperty()
  @Expose()
  courseSectionId! : number

  @ApiProperty()
  @Expose()
  title! : string

  @ApiProperty()
  @Expose()
  @IsOptional()
  content? : string

  @ApiProperty()
  @Expose()
  @IsOptional()
  thumbnail? : string

  @ApiProperty()
  @Expose()
  video! : string

  @ApiProperty()
  @IsOptional()
  @Expose()
  order? : number

  @ApiProperty()
  @Expose()
  date! : string

  @ApiProperty()
  @Expose()
  isFree! : boolean

  @ApiProperty()
  @Expose()
  createdAt! : string

  @ApiProperty()
  @Expose()
  updatedAt? : string
}
