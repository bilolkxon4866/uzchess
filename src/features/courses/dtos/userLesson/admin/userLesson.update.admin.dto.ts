// update-user-lesson.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class UserLessonUpdateAdminDto {
  @ApiPropertyOptional({ example: 1, description: 'User ID' })
  @IsOptional()
  @IsNumber()
  userid?: number;

  @ApiPropertyOptional({ example: 1, description: 'Course Lesson ID' })
  @IsOptional()
  @IsNumber()
  CourseLessonId?: number;

  @ApiPropertyOptional({ example: 120, description: 'Stopped at (seconds)' })
  @IsOptional()
  @IsNumber()
  stoppedAt?: number;

  @ApiPropertyOptional({ example: false, description: 'Is lesson completed' })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}