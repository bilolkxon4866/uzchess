import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BookReviewsDetailAdminDto{
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  userId!: number;

  @Expose()
  @ApiProperty()
  bookId!: number;

  @Expose()
  @ApiProperty()
  rating!: number;

  @Expose()
  @ApiProperty()
  comment!: string;

  @Expose()
  @ApiProperty()
  date!: Date;
}