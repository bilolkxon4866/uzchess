import { IsDateString, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { MatchType, WinnerType } from '../../../../../core/enum/enum';
import { ApiProperty } from '@nestjs/swagger';

export class MatchesUpdateUpdateDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  firstPlayerId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  firstPlayerResult?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  secondPlayerId?: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  secondPlayerResult?: number;

  @IsOptional()
  @ApiProperty()
  @IsEnum(MatchType)
  type?: MatchType;

  @IsOptional()
  @IsNumber()
  @ApiProperty({type : 'string',format : 'binary'})
  moves?: number;

  @IsOptional()
  @ApiProperty()
  @IsDateString()
  date?: string;

  @IsOptional()
  @ApiProperty()
  @IsEnum(WinnerType)
  winner?: WinnerType;
}