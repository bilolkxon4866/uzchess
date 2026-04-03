import { IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CountryDetailAdminDto {
  @Expose()
  @MaxLength(256)
  @ApiProperty()
  title! : string

  @Expose()
  @ApiProperty()
  flag! : string

  @Expose()
  @ApiProperty()
  createdAt! : string

  @Expose()
  @ApiProperty()
  @IsOptional()
  updatedAt? : string
}