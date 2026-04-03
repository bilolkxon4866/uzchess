import { Entity, Column, OneToMany } from 'typeorm';
import { Role, LoginType } from '../../../core/enum/enum';
import { BaseModel } from '../../../core/base-model';
import { OtpCode } from './otpCodes.entity'

@Entity('users')
export class User extends BaseModel {
  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role!: Role;

  @Column({ length: 64 })
  fullName!: string;

  @Column({ length: 128, nullable: true })
  profileImage!: string;

  @Column({ length: 64, unique: true })
  login!: string;

  @Column({ type: 'enum', enum: LoginType })
  loginType!: LoginType;
  
  @Column({ length: 128, nullable: true })
  password!: string;

  @Column({ type: 'date', nullable: true })
  birthDate!: Date;

  @Column({ default: false })
  isVerified!: boolean;

  @Column({ default: false })
  isActive!: boolean;

  @OneToMany(() => OtpCode, (otp) => otp.user)
  otpCodes!: OtpCode[];
}