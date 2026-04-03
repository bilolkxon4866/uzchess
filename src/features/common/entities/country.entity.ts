import { Entity, Column, OneToMany} from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Player } from './players.entity';

@Entity('countries')
export class Country extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @Column({ length: 128 })
  flag!: string;

  @OneToMany(() => Player, (player) => player.country)
  players!: Player[];
}