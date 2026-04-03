import { IsNotEmpty, IsString, MaxLength, IsNumber, Allow } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DifficultyCreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  @ApiProperty()
  title!: string;

  @Expose()
  @Allow()
  @ApiProperty({type: 'string', format: 'binary'})
  icon!: string;
}