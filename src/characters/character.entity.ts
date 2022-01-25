import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'characters' })
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identifier: string;

  @Column()
  characterid: number;

  @Column()
  money: number;

  @Column()
  bank: number;

  @Column()
  gold: number;

  @Column()
  xp: number;

  @Column()
  level: number;

  @Column()
  job: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  jobgrade: number;

  @Column()
  coords: string;
}
