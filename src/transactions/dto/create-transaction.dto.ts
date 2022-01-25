import { IsEnum, IsNotEmpty } from 'class-validator';
import { TransactionType } from '../transaction.entity';

export class CreateTransactionDTO {
  @IsNotEmpty()
  shop: string;

  @IsNotEmpty()
  player: string;

  @IsNotEmpty()
  item: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: TransactionType;
}
