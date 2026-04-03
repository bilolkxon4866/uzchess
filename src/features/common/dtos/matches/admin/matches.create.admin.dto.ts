import { Allow, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { MatchType, WinnerType } from '../../../../../core/enum/enum';
import { ApiProperty } from '@nestjs/swagger';

export class MatchesCreateAdminDto {
   @IsNumber()
   @IsNotEmpty()
   @ApiProperty()
   firstPlayerId!: number;

   @IsNumber()
   @ApiProperty()
   @IsNotEmpty()
   firstPlayerResult!: number;

   @IsNumber()
   @ApiProperty()
   @IsNotEmpty()
   secondPlayerId!: number;

   @IsNumber()
   @ApiProperty()
   @IsNotEmpty()
   secondPlayerResult!: number;

  @IsEnum(MatchType)
  @ApiProperty()
  type!: MatchType;

  @IsString()
  @Allow()
  @ApiProperty({type : 'string',format : 'binary'})
  moves!: string;

  @IsDateString()
  @ApiProperty()
  date!: string;

  @IsEnum(WinnerType)
  @ApiProperty()
  winner!: WinnerType;
}