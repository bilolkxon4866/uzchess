import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CountryListAdminDto {
  @Expose()
  @ApiProperty()
  title! : string

  @Expose()
  @ApiProperty()
  flag! : string
}