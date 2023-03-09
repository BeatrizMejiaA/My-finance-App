import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from 'src/app/services/portfolios.service';
import { Portfolio } from 'src/app/interfaces/portfolio.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set-portafolio',
  templateUrl: './set-portafolio.component.html',
  styleUrls: ['./set-portafolio.component.css'],
})
export class SetPortafolioComponent implements OnInit {
  portfolio: Portfolio = {
    id: 0,
    name: '',
    stockValue: 0,
    description: '',
    stockQty: 0,
  };
  constructor(
    private portfolioservice: PortfoliosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  allPortfolios?: Portfolio[];

  ngOnInit(): void {
    this.getPortfolios();
  }

  getPortfolios() {
    console.log(this.portfolio);
    this.portfolioservice.getPortfolios().subscribe(
      (res) => (this.allPortfolios = res),
      (err) => console.log(err)
    );
  }

  createStock() {
    console.log(this.portfolio);
    this.portfolioservice.createPortfolios(this.portfolio).subscribe(
      (res) => {
        console.log(res);
        this.getPortfolios();
        this.router.navigate(['/setPortafolio']);
      },
      (err) => console.log(err)
    );
  }

  deleteStock(portfolio: Portfolio): void {
    //console.log(`here is${portfolio}`);
    if (portfolio.id === undefined) {
      console.log('id its empty');
    } else {
      this.portfolioservice.deletePortfolios(portfolio.id).subscribe(
        (res) => {
          //onsole.log(res);
          this.getPortfolios();
          this.router.navigate(['/setPortafolio']);
        },
        (err) => console.log(err)
      );
    }
  }
}
