import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BookLikesListAdminDto {
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
  date!: Date;
}