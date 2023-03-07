import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
