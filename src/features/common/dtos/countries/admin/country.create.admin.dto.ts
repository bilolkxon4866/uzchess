import { Allow, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CountryCreateAdminDto {
  @IsString()
  @ApiProperty()
  @MaxLength(256)
  title! : string

  @IsString()
  @Allow()
  @ApiProperty({type : 'string',format : 'binary'})
  flag! : string
}