import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserLessonListAdminDto {
  @ApiProperty({ example: 1, description: 'ID' })
  @Expose()
  id!: number;

  @ApiProperty({ example: 1, description: 'User ID' })
  @Expose()
  userid!: number;

  @ApiProperty({ example: 1, description: 'Course Lesson ID' })
  @Expose()
  CourseLessonId!: number;

  @ApiProperty({ example: 120, description: 'Stopped at (seconds)', nullable: true })
  @Expose()
  stoppedAt!: number;

  @ApiProperty({ example: false, description: 'Is lesson completed' })
  @Expose()
  isCompleted!: boolean;
}