import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageCreateAdminDto{
  @IsString()
  @ApiProperty()
  @MaxLength(32)
  title! : string

  @IsString()
  @ApiProperty()
  code! : string
}