import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorDetailAdminDto{
  @Expose()
  @ApiProperty()
  id! : number

  @Expose()
  @ApiProperty()
  fullName!: string

  @Expose()
  @ApiProperty()
  createdAt! : number

  @Expose()
  @ApiProperty()
  updatedAt! : number
}