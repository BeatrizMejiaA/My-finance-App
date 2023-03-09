import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from './stock.entity/stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockEntity])],
  providers: [StocksService],
  controllers: [StocksController],
})
export class StocksModule {}
