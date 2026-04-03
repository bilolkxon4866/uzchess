import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CourseReviewsListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  userId!: number;

  @Expose()
  @ApiProperty()
  courseId!: number;

  @Expose()
  @ApiProperty()
  rating!: number;

  @Expose()
  @ApiProperty()
  comment!: string;

  @Expose()
  @ApiProperty()
  date!: Date;
}