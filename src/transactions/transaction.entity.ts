import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ShopTransaction {
  @PrimaryGeneratedColumn('uuid') // Autoincrement and primary
  id: string;

  @Column()
  shop: string;

  @Column()
  player: string;

  @Column()
  item: string;

  @Column()
  amount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  price: number;

  @Column()
  type: TransactionType;

  @CreateDateColumn()
  date: Date;
}

export enum TransactionType {
  PURCHASE = 'purchase',
  SALE = 'sale',
}
