import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { MatchType, WinnerType } from '../../../core/enum/enum';
import { Player } from './players.entity';

@Entity('matches')
export class MatchesEntity extends BaseModel{
  @Column({ type: 'int' })
  firstPlayer!: number;

  @Column({ type: 'int' })
  firstPlayerResult!: number;

  @Column({ type: 'int' })
  secondPlayer!: number;

  @Column({ type: 'int' })
  secondPlayerResult!: number;

  @Column({ type: 'enum', enum: MatchType })
  type!: MatchType;

  @Column({ type: 'varchar' })
  moves!: string;

  @Column({ type: 'date' })
  date!: string;

  @Column({ type: 'enum', enum: WinnerType })
  winner!: WinnerType;

  @ManyToOne(() =>  Player, (player) => player.matchesAsFirst, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'firstPlayer' })
  firstPlayerRef!: Player;

  @ManyToOne(() => Player, (player) => player.matchesAsSecond, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'secondPlayer' })
  secondPlayerRef!: Player;
}