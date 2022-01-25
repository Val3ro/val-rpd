import { CraftingType } from '../craft.entity';

export class CreateCraftDTO {
  id: string;
  player: string;
  item: string;
  amount: number;
  type: CraftingType;
}
