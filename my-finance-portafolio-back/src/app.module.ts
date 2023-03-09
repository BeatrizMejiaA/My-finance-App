import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { PortfolioEntity } from './portfolios/portfolio.entity/portfolio.entity';
import { StocksModule } from './stocks/stocks.module';
import { StockEntity } from './stocks/stock.entity/stock.entity';
import { CorsMiddleware } from './middleware/cors.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      charset: 'utf8mb4',
      synchronize: true,
      logging: ['error'],
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'myportfolio',
      subscribers: [],
      keepConnectionAlive: true,
      autoLoadEntities: true,
      entities: [PortfolioEntity, StockEntity],
      //synchronize: false,
      //logging: true,
      // migrationsRun: false,
    }),

    PortfoliosModule,

    StocksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
/*export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}*/
