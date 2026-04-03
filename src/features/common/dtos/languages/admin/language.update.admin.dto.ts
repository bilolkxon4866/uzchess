import { IsOptional, IsString, Max, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageUpdateAdminDto{
  @IsString()
  @ApiProperty()
  @MaxLength(32)
  @IsOptional()
  title? : string

  @IsString()
  @ApiProperty()
  @IsOptional()
  code? : string
}