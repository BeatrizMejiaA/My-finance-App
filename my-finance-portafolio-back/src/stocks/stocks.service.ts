import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StockEntity } from './stock.entity/stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createStockDto } from 'src/data-transfer-object/createStock.dto';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(StockEntity)
    private stockRepository: Repository<StockEntity>,
  ) {}

  async createStock(stock: createStockDto) {
    const newStock = this.stockRepository.create(stock);
    return this.stockRepository.save(newStock);
  }
}
