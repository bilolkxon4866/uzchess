import { Allow, IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CourseLessonCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  courseId! : number

  @IsNumber()
  @ApiProperty()
  courseSectionId! : number

  @IsString()
  @ApiProperty()
  title! : string

  @IsString()
  @ApiProperty()
  @IsOptional()
  content? : string

  @IsString()
  @ApiProperty()
  @IsOptional()
  thumbnail? : string

  @IsString()
  @Allow()
  @ApiProperty({type : 'string',format : 'binary'})
  video! : string

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  order? : number

  @IsDateString()
  @ApiProperty()
  date! : string

  @IsBoolean()
  @ApiProperty()
  isFree! : boolean
}