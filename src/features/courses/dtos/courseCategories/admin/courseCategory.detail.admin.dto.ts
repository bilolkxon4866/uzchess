import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CourseCategoryDetailAdminDto {
  @Expose()
  @ApiProperty()
  id! : number

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  createdAt! : string

  @Expose()
  @ApiProperty()
  @IsOptional()
  updatedAt? : string
}