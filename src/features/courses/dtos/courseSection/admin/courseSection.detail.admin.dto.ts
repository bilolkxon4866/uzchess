import { IsOptional } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CourseSectionDetailAdminDto {
  @Expose()
  @ApiProperty()
  id! : number

  @Expose()
  @ApiProperty()
  courseId!: number

  @Expose()
  @ApiProperty()
  title!: string

  @Expose()
  @ApiProperty()
  @IsOptional()
  order?: number

  @Expose()
  @ApiProperty()
  date!: string

  @Expose()
  @ApiProperty()
  createdAt! : string

  @Expose()
  @ApiProperty()
  updated! : string
}