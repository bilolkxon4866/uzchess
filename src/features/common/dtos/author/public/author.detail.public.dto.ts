import { IsOptional, IsString, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorDetailPublicDto {
  @Expose()
  @ApiProperty()
  id! : number

  @Expose()
  @ApiProperty()
  fullName!: string
}