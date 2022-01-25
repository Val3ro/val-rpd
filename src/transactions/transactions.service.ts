import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { TransactionsRepository } from './transactions.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopTransaction } from './transaction.entity';
import { CharactersService } from 'src/characters/characters.service';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionsRepository, 'PostgresSQL')
    private transactionsRepository: TransactionsRepository,
    private charactersRepository: CharactersService,
  ) {}

  async getAllTransactions() {
    return this.transactionsRepository.find();
  }

  async getTransactionById(id: string): Promise<ShopTransaction> {
    const found = await this.transactionsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with id "${id}" not found`);
    }

    return found;
  }

  async createTransaction(
    createTransactionDto: CreateTransactionDTO,
  ): Promise<ShopTransaction> {
    const player = createTransactionDto.player;
    createTransactionDto.player =
      await this.charactersRepository.getFullNameById(player);
    return this.transactionsRepository.createTransaction(createTransactionDto);
  }

  deleteTransaction(id: string): Promise<void> {
    return this.transactionsRepository.deleteTransaction(id);
  }

  getTransactionsCount(): Promise<number> {
    return this.transactionsRepository.getTransactionsCount();
  }
}
