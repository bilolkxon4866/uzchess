import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseLikesCreatePublicDto{
  @IsInt()
  @ApiProperty()
  courseId! : number
}