import {IsDateString, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CourseSectionUpdateAdminDto {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  courseId?: number

  @IsString()
  @IsOptional()
  @ApiProperty()
  @MaxLength(256)
  title?: string

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @IsOptional()
  order?: number

  @IsDateString()
  @ApiProperty()
  @IsOptional()
  date?: string
}