import { EntityRepository, Repository } from 'typeorm';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { ShopTransaction } from './transaction.entity';

@EntityRepository(ShopTransaction)
export class TransactionsRepository extends Repository<ShopTransaction> {
  async createTransaction(
    createTransactionDto: CreateTransactionDTO,
  ): Promise<ShopTransaction> {
    const { shop, player, item, amount, price, type } = createTransactionDto;
    console.log(player);
    const transaction = this.create({
      shop,
      player,
      item,
      amount,
      price,
      type,
    });

    await this.save(transaction);
    return transaction;
  }

  async deleteTransaction(id: string): Promise<void> {
    this.delete({ id });
  }

  async getTransactionsCount(): Promise<number> {
    return this.count();
  }
}
