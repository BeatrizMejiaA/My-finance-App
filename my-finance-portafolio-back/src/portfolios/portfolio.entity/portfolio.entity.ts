import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StockEntity } from '../../stocks/stock.entity/stock.entity';

@Entity({ name: 'portfolio', schema: 'myportfolio' })
export class PortfolioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stockValue: number;

  @Column()
  stockQty: number;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  //@OneToMany(() => StockEntity, (stock) => stock.parentPortfolio)
  // stocks: StockEntity[];
}
