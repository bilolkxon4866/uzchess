import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CourseReviewsCreateAdminDto {
  @ApiProperty()
  @IsNumber()
  userId!: number;

  @ApiProperty()
  @IsNumber()
  courseId!: number;

  @ApiProperty()
  @IsNumber()
  rating!: number;

  @ApiProperty()
  @IsString()
  @MaxLength(512)
  @IsOptional()
  comment?: string;

  @ApiProperty()
  @IsDateString()
  date!: string;
}