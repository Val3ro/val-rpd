import { Module } from '@nestjs/common';
import { GatheringsController } from './gathering.controller';
import { GatheringsService } from './gatherings.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { GatheringsRepository } from './gatherings.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([GatheringsRepository], 'PostgresSQL'),
    AuthModule,
    ConfigModule,
  ],
  controllers: [GatheringsController],
  exports: [TypeOrmModule],
  providers: [GatheringsService],
})
export class GatheringModule {}
