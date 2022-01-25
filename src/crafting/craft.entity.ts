import { Ingredient } from 'src/ingredients/ingredient.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Craft {
  @PrimaryGeneratedColumn('uuid') // Autoincrement and primary
  id: string;

  @Column()
  player: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.craft)
  recipe: Ingredient[];

  @Column()
  item: string;

  @Column()
  amount: number;

  @Column()
  type: CraftingType;

  @CreateDateColumn()
  date: Date;
}

export enum CraftingType {
  WEAPONSMITH = 'weaponsmith',
  ARTISAN = 'artisan',
  COOK = 'cook',
  HORSE_BREEDER = 'horse-breeder',
  MOONSHINER = 'moonshiner',
}
