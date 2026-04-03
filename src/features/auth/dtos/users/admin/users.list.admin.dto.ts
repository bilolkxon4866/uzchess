import {Expose} from "class-transformer";
import {IsEnum} from "class-validator";
import {LoginType, Role} from "../../../../../core/enum/enum";
import { ApiProperty } from '@nestjs/swagger';

export class UserListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number

  @Expose()
  @IsEnum(Role)
  @ApiProperty()
  role!: Role

  @Expose()
  @ApiProperty()
  fullName!: string

  @Expose()
  @ApiProperty()
  profileImage!: string

  @Expose()
  @ApiProperty()
  login!: string

  @Expose()
  @ApiProperty()
  @IsEnum(LoginType)
  loginType!: LoginType

  @Expose()
  @ApiProperty()
  birthDate!: string

  @Expose()
  @ApiProperty()
  isVerified!: boolean

  @Expose()
  @ApiProperty()
  isActive!: boolean
}