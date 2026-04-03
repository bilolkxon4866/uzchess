import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PlayersListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  fullName!: string;

  @Expose()
  @ApiProperty()
  image!: string;

  @Expose()
  @ApiProperty()
  countryId!: number;

  @Expose()
  @ApiProperty()
  classic!: number;

  @Expose()
  @ApiProperty()
  rapid!: number;

  @Expose()
  @ApiProperty()
  blitz!: number;
}