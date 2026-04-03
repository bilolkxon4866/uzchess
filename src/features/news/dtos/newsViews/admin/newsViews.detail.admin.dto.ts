import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class NewsViewsDetailAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @Type(() => Number)
  @ApiProperty()
  userId!: number;

  @Expose()
  @Type(() => Number)
  @ApiProperty()
  newsId!: number;

  @Expose()
  @ApiProperty()
  firstDate!: Date;

  @Expose()
  @ApiProperty()
  lastDate!: Date;

  @Expose()
  @Type(() => Number)
  @ApiProperty()
  count!: number;

  @Expose()
  @ApiProperty()
  createdAt!: Date;

  @Expose()
  @ApiProperty()
  updatedAt!: Date;
}