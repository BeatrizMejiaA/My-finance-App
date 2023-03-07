import { Injectable, Inject } from '@nestjs/common';
import { PortfolioEntity } from './portfolio.entity/portfolio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectRepository(PortfolioEntity)
    private portfolioRepository: Repository<PortfolioEntity>,
  ) {}
}
