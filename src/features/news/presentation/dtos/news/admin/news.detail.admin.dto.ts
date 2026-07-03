import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewsDetailAdminDto{
  @Expose()
  @ApiProperty()
  id!: number

  @Expose()
  @ApiProperty()
  title! : string

  @Expose()
  @ApiProperty()
  date! : string

  @Expose()
  @ApiProperty()
  image! : string

  @Expose()
  @ApiProperty()
  content! : string

  @Expose()
  @ApiProperty()
  createdAt!: string

  @Expose()
  @ApiProperty()
  @IsOptional()
  updatedAt?: string
}