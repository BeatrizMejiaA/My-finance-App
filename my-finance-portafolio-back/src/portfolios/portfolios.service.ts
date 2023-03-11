import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { PortfolioEntity } from './portfolio.entity/portfolio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPortfolioDto } from 'src/data-transfer-object/createPortfolio.dto';

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectRepository(PortfolioEntity)
    private portfolioRepository: Repository<PortfolioEntity>,
  ) {}

  async createPortfolio(portfolio: createPortfolioDto) {
    //console.log(portfolio);
    const portExist = await this.portfolioRepository.findOne({
      where: {
        name: portfolio.name,
      },
    });

    if (portExist) {
      return new HttpException('Portfolio already exists', HttpStatus.CONFLICT);
    }
    const newportfolio = this.portfolioRepository.create(portfolio);
    return this.portfolioRepository.save(newportfolio);
  }

  getAllPortfolios() {
    return this.portfolioRepository.find();
  }

  getPortfolioById(id: number) {
    return this.portfolioRepository.findOne({
      where: { id },
    });
  }

  deletePortfolio(id: number) {
    return this.portfolioRepository.delete({ id });
  }
}
