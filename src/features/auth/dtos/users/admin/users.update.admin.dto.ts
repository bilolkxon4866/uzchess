import {LoginType, Role} from "../../../../../core/enum/enum"
import {IsBoolean, IsDateString, IsEnum, IsOptional, IsString} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UsersUpdateAdminDto {
  @IsEnum(Role)
  @IsOptional()
  @ApiProperty()
  role?: Role

  @IsString()
  @IsOptional()
  @ApiProperty()
  fullName?: string

  @IsString()
  @IsOptional()
  @ApiProperty({type : 'string',format : 'binary'})
  profileImage?: string

  @IsString()
  @IsOptional()
  @ApiProperty()
  login?: string

  @IsEnum(LoginType)
  @IsOptional()
  @ApiProperty()
  loginType?: LoginType

  @IsOptional()
  @IsString()
  @ApiProperty()
  password?: string

  @IsDateString()
  @ApiProperty()
  @IsOptional()
  birthDate?: string

  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  isVerified?: boolean

  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  isActive?: boolean
}