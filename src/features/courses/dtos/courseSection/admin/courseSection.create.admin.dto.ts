import {IsDateString, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CourseSectionCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  courseId!: number

  @IsString()
  @ApiProperty()
  @MaxLength(256)
  title!: string

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  order?: number

  @IsDateString()
  @ApiProperty()
  date!: string
}