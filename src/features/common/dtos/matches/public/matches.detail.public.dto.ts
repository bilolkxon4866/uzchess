import { Expose } from 'class-transformer';
import { MatchType, WinnerType } from '../../../../../core/enum/enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class MatchesDetailPublicDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  firstPlayerId: number;

  @Expose()
  @ApiProperty()
  firstPlayerResult: number;

  @Expose()
  secondPlayerId: number;

  @Expose()
  @ApiProperty()
  secondPlayerResult: number;

  @Expose()
  @ApiProperty()
  type: MatchType;

  @Expose()
  @ApiProperty()
  moves: number;

  @Expose()
  @ApiProperty()
  date: string;

  @Expose()
  @ApiProperty()
  winner: WinnerType;


  @Expose()
  @ApiProperty()
  created!:string

  @Expose()
  @ApiProperty()
  @IsOptional()
  updatedAt? : string
}