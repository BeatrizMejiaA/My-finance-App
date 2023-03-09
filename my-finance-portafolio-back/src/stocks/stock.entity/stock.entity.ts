import { PortfolioEntity } from 'src/portfolios/portfolio.entity/portfolio.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity('stockentity')
export class StockEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stockName: string;

  @Column({ nullable: true })
  stockFullName: string;

  // @Column({ precision: 6, scale: 2 })
  // stockValue: number;

  // @ManyToOne(() => PortfolioEntity)
  //parentPortfolio: PortfolioEntity;
}
