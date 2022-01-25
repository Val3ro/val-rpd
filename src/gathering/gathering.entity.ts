import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Gathering {
  @PrimaryGeneratedColumn('uuid') // Autoincrement and primary
  id: string;

  @Column()
  player: string;

  @Column()
  item: string;

  @Column()
  amount: number;

  @Column()
  type: GatheringType;

  @CreateDateColumn()
  date: Date;
}

export enum GatheringType {
  LUMBERJAKING = 'lumberjaking',
  MINING = 'mining',
  HARVESTING = 'harvesting',
  HUNTING = 'hunting',
  FISHING = 'fishing',
}
