import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageDetailPublicDto {
  @Expose()
  @ApiProperty()
  id! : number

  @Expose()
  @ApiProperty()
  title! : string

  @ApiProperty()
  @Expose()
  code! : string

  @ApiProperty()
  @Expose()
  createdAt! : string

  @ApiProperty()
  @Expose()
  updatedAt? : string
}