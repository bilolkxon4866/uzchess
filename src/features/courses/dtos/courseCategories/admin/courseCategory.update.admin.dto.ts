import { IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseCategoryUpdateAdminDto {
  @IsString()
  @ApiProperty()
  @MaxLength(64)
  @IsOptional()
  title?: string;
}