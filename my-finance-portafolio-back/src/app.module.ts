import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { PortfolioEntity } from './portfolios/portfolio.entity/portfolio.entity';
import { StocksModule } from './stocks/stocks.module';
import { StockEntity } from './stocks/stock.entity/stock.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        charset: 'utf8mb4',
        synchronize: true,
        logging: ['error'],
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        subscribers: [],
        keepConnectionAlive: true,
        autoLoadEntities: true,
        entities: [PortfolioEntity, StockEntity],
        //logging: true,
        // migrationsRun: false,
      }),
      inject: [ConfigService],
    }),
    PortfoliosModule,

    StocksModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
