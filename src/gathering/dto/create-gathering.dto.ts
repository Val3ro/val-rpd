import { GatheringType } from '../gathering.entity';

export class CreateGatheringDTO {
  id: string;
  player: string;
  item: string;
  amount: number;
  type: GatheringType;
}
