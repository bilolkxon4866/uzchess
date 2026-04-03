// create-user-lesson.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class UserLessonCreateAdminDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber()
  userid!: number;

  @ApiProperty({ example: 1, description: 'Course Lesson ID' })
  @IsNumber()
  CourseLessonId!: number;

  @ApiProperty({ example: 120, description: 'Stopped at (seconds)', required: false })
  @IsOptional()
  @IsNumber()
  stoppedAt?: number;

  @ApiProperty({ example: false, description: 'Is lesson completed', default: false })
  @IsBoolean()
  isCompleted!: boolean;
}