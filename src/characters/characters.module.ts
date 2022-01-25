import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CharactersRepository } from './characters.repository';
import { CharactersService } from './characters.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CharactersRepository], 'MySQL'),
    AuthModule,
    ConfigModule,
  ],
  providers: [CharactersService],
  exports: [CharactersService],
})
export class CharactersModule {}
