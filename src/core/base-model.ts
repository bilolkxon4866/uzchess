import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BaseModel extends BaseEntity{
  @PrimaryGeneratedColumn()
  id! : number

  @CreateDateColumn()
  createdAt! : string

  @UpdateDateColumn({ nullable : true })
  updatedAt? : string
}