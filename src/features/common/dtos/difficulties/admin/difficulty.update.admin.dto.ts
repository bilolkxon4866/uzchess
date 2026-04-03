import { Allow, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DifficultyUpdateAdminDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  @MaxLength(32)
  title?: string;

  @IsOptional()
  @Allow()
  @ApiProperty({type: 'string', format: 'binary'})
  icon?: string;
}