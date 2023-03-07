import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { createPortfolioDto } from 'src/data-transfer-object/createPortfolio.dto';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private portfolioservice: PortfoliosService) {}

  @Post()
  createPortfolio(@Body() newPortfolio: createPortfolioDto) {
    console.log(newPortfolio);
    return this.portfolioservice.createPortfolio(newPortfolio);
    //return newPortfolio;
  }

  @Get()
  getAllPortfolios() {
    return this.portfolioservice.getAllPortfolios();
  }
  @Get(':id')
  getPortfolioById(@Param('id', ParseIntPipe) id: number) {
    return this.portfolioservice.getPortfolioById(id);
  }

  @Delete(':id')
  deletePortfolio(@Param('id', ParseIntPipe) id: number) {
    return this.portfolioservice.deletePortfolio(id);
  }
}
