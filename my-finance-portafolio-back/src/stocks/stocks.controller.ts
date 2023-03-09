import { StocksService } from './stocks.service';
import { createStockDto } from '../data-transfer-object/createStock.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('stocks')
export class StocksController {
  constructor(private stocksService: StocksService) {}

  @Post()
  createPortfolio(@Body() newPortfolio: createStockDto) {
    console.log(newPortfolio);
    return this.stocksService.createStock(newPortfolio);
    //return newPortfolio;
  }
}
