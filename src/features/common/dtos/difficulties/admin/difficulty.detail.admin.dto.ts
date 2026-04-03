import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class DifficultyDetailAdminDto {
  @Expose()
  @ApiProperty()
  id!: number

  @Expose()
  @ApiProperty()
  icon!: string

  @Expose()
  @ApiProperty()
  createdAt! : string

  @Expose()
  @ApiProperty()
  @IsOptional()
  updatedAt? : string
}