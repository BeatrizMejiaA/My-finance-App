import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StockEntity } from '../../stocks/stock.entity/stock.entity';

@Entity({ name: 'PORTFOLIO', schema: 'myportfolio' })
export class PortfolioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => StockEntity, (stock) => stock.parentPortfolio)
  stocks: StockEntity[];
}
