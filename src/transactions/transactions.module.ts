import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CharactersRepository } from 'src/characters/characters.repository';
import { CharactersService } from 'src/characters/characters.service';
import { TransactionsController } from './transactions.controller';
import { TransactionsRepository } from './transactions.repository';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [
    AuthModule,
    ConfigModule,
    TypeOrmModule.forFeature([TransactionsRepository], 'PostgresSQL'),
    TypeOrmModule.forFeature([CharactersRepository], 'MySQL'),
  ],
  controllers: [TransactionsController],
  exports: [TransactionsService],
  providers: [TransactionsService, CharactersService],
})
export class TransactionsModule {}
