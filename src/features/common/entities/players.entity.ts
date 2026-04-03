import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { Country } from './country.entity';
import { MatchesEntity } from './matches.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('players')
export class Player extends BaseModel {
  @Column()
  countryId! : number

  @Column({ length: 64 })
  fullName!: string;

  @Column({ length: 128, nullable: true})
  image!: string;

  @Column({ nullable: true })
  classic!: number;

  @Column({ nullable: true })
  rapid!: number;

  @Column({ nullable: true })
  blitz!: number;

  @ManyToOne(() => Country, (country) => country.players,{createForeignKeyConstraints : false})
  country!: Country;

  @OneToMany(() => MatchesEntity, (match) => match.firstPlayer)
  matchesAsFirst!:  MatchesEntity[];

  @OneToMany(() => MatchesEntity, (match) => match.secondPlayer)
  matchesAsSecond!: MatchesEntity[];
}