import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { TransactionsService } from './transactions.service';
import { ShopTransaction } from './transaction.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('transactions')
@UseGuards(AuthGuard())
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {} // private / public will add the property to the class automatically

  @Get()
  getAllTransactions() {
    return this.transactionsService.getAllTransactions();
  }

  @Get('/count')
  getTransactionsCount(): Promise<number> {
    return this.transactionsService.getTransactionsCount();
  }

  @Get('/:id')
  getTransactionById(@Param('id') id: string): Promise<ShopTransaction> {
    return this.transactionsService.getTransactionById(id);
  }

  @Delete('/:id')
  deleteTransaction(@Param('id') id: string): Promise<void> {
    console.log(id);
    return this.transactionsService.deleteTransaction(id);
  }

  @Post()
  createTransaction(
    @Body() createTransactionDto: CreateTransactionDTO,
  ): Promise<ShopTransaction> {
    return this.transactionsService.createTransaction(createTransactionDto);
  }
}
