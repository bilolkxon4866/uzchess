import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class NewsListPublicDto{
  @Expose()
  @ApiProperty()
  id!: number

  @Expose()
  @ApiProperty()
  title! : string

  @Expose()
  @ApiProperty()
  image! : string

  @Expose()
  @ApiProperty()
  date! : string
}