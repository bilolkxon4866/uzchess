import { Allow, IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CourseLessonUpdateAdminDto {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  courseId? : number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  courseSectionId? : number

  @IsString()
  @IsOptional()
  @ApiProperty()
  title? : string

  @IsString()
  @IsOptional()
  @ApiProperty()
  @IsOptional()
  content? : string

  @IsString()
  @IsOptional()
  @ApiProperty()
  @IsOptional()
  thumbnail? : string

  @IsString()
  @Allow()
  @ApiProperty({type : 'string',format : 'binary'})
  @IsOptional()
  video? : string

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  order? : number

  @IsDateString()
  @ApiProperty()
  @IsOptional()
  date? : string

  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  isFree? : boolean
}