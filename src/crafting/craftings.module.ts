import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CraftingsController } from './craftings.controller';
import { CraftingsRepository } from './craftings.repository';
import { CraftingsService } from './craftings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CraftingsRepository], 'PostgresSQL'),
    AuthModule,
    ConfigModule,
  ],
  controllers: [CraftingsController],
  exports: [TypeOrmModule],
  providers: [CraftingsService],
})
export class CraftingModule {}
