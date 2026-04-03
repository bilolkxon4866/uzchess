import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MatchType, WinnerType } from '../../../../../core/enum/enum';

export class MatchListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  firstPlayerName!: string;

  @Expose()
  @ApiProperty()
  firstPlayerResult!: number;

  @Expose()
  @ApiProperty()
  secondPlayerName!: string;

  @Expose()
  @ApiProperty()
  secondPlayerResult!: number;

  @Expose()
  @ApiProperty({ enum: MatchType })
  type!: MatchType;

  @Expose()
  @ApiProperty()
  moves!: number;

  @Expose()
  @ApiProperty()
  date!: string;

  @Expose()
  @ApiProperty({ enum: WinnerType })
  winner!: WinnerType;
}