import {Role, LoginType} from "../../../../../core/enum/enum";
import {IsBoolean, IsDateString, IsEnum, IsOptional, IsString, Max, MaxLength} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class UserCreateAdminDto {
  @IsEnum(Role)
  @ApiProperty()
  role!: Role

  @IsString()
  @ApiProperty()
  @MaxLength(64)
  fullName!: string

  @IsString()
  @ApiProperty({type : 'string',format : 'binary'})
  @IsOptional()
  profileImage?: string

  @IsString()
  @ApiProperty()
  @MaxLength(64)
  login!: string

  @IsEnum(LoginType)
  @ApiProperty()
  loginType!: LoginType

  @IsOptional()
  @ApiProperty()
  @IsString()
  @MaxLength(128)
  password?: string

  @IsDateString()
  @ApiProperty()
  @IsOptional()
  birthDate?: string

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  @ApiProperty()
  isVerified!: boolean

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  @ApiProperty()
  isActive!: boolean
}