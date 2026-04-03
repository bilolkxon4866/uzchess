import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CourseReviewsUpdateAdminDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  userId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  courseId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  rating?: number;

  @ApiProperty()
  @IsString()
  @MaxLength(512)
  @IsOptional()
  comment?: string;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  date?: string;
}