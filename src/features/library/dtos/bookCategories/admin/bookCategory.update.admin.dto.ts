import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class BookCategoryUpdateAdminDto{
  @IsString()
  @IsOptional()
  @ApiProperty()
  @MaxLength(64)
  title? : string
}