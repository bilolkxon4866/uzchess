import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, BaseEntity} from 'typeorm';
import { OtpType } from '../../../core/enum/enum';
import { User } from './users.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('otpcodes')
export class OtpCode extends BaseModel{
  @Column()
  userId!: number;

  @ManyToOne(() => User , (user) => user.otpCodes)
  user!: User;

  @Column({ length: 6 })
  code!: string;

  @Column({ type: 'enum', enum: OtpType })
  type!: OtpType;
}