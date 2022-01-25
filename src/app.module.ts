import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transactions/transactions.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { GatheringModule } from './gathering/gatherings.module';
import { CharactersModule } from './characters/characters.module';
import { Craft } from './crafting/craft.entity';
import { Gathering } from './gathering/gathering.entity';
import { ShopTransaction } from './transactions/transaction.entity';
import { Character } from './characters/character.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    TransactionsModule,
    TypeOrmModule.forRootAsync({
      name: 'MySQL',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (ConfigService: ConfigService) => {
        return {
          type: 'mysql',
          autoLoadEntities: false,
          synchronize: false,
          host: ConfigService.get('CHAR_HOST'),
          port: Number(ConfigService.get('CHAR_PORT')),
          username: ConfigService.get('CHAR_USERNAME'),
          password: ConfigService.get('CHAR_PASSWORD'),
          database: ConfigService.get('CHAR_DATABASE'),
          entities: [Character],
        } as MysqlConnectionOptions;
      },
    }),
    TypeOrmModule.forRootAsync({
      name: 'PostgresSQL',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        //const isProduction = configService.get('STAGE') === 'prod';

        return {
          ssl: false, //isProduction,
          extra: {
            ssl: null,
          },
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: Number(configService.get('DB_PORT')),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [],
        } as PostgresConnectionOptions;
      },
    }),
    AuthModule,
    GatheringModule,
    CharactersModule,
    IngredientsModule,
  ],
})
export class AppModule {}
