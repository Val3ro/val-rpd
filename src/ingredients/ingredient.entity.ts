import { Craft, CraftingType } from 'src/crafting/craft.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Craft, (craft) => craft.recipe)
  craft: Craft;

  @Column()
  item: string;

  @Column()
  amount: number;

  @Column()
  type: CraftingType;
}
