import { Component, OnInit, NgZone } from '@angular/core';
import { PortfoliosService } from 'src/app/services/portfolios.service';
import { Portfolio } from 'src/app/interfaces/portfolio.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { stockOptions } from 'src/app/interfaces/stockOptions.interface';
import { StocksService } from 'src/app/services/stocks.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-set-portafolio',
  templateUrl: './set-portafolio.component.html',
  styleUrls: ['./set-portafolio.component.css'],
})
export class SetPortafolioComponent implements OnInit {

  portfolioForm: FormGroup;
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
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private stocksService: StocksService
  ) {
    this.portfolioForm = this.formBuilder.group({
      name: ['', Validators.required],
      stockValue: ['', Validators.required],
      description: ['', Validators.required],
      stockQty: ['', Validators.required],
    });
  }

  allPortfolios?: Portfolio[];
  stockOptions?: stockOptions[];

  ngOnInit(): void {
    this.getPortfolios();
    this.getStocksSelect();
  }

  // gets all portfolios from the db
  getPortfolios() {
    //console.log(this.portfolio);
    this.portfolioservice.getPortfolios().subscribe(
      (res) => (this.allPortfolios = res),
      (err) => console.log(err)
    );
  }

  // gets all stocks from the API of polygon, showing just 100 because has more than 10k
  getStocksSelect() {
    console.log(this.stockOptions);
    this.stocksService.getStocks().subscribe(
      (res) => console.log((this.stockOptions = res.results.slice(0, 100))),
      (err) => console.log(err)
    );
  }

  // gets the input user form values, added validations and call endpoint create and set it to DB
  createPortfolio() {
    console.log(this.portfolioForm);

    const portfolioNew: Portfolio = {
      name: this.portfolioForm.get('name')?.value,
      stockValue: this.portfolioForm.get('stockValue')?.value,
      description: this.portfolioForm.get('description')?.value,
      stockQty: this.portfolioForm.get('stockQty')?.value,
    };

    if (!this.portfolioForm.valid) {
      console.log('invalid form');
    } else {
      this.portfolioservice
        .createPortfolios(this.portfolioForm.value)
        .subscribe(
          (res) => {
            console.log(res);
            this.getPortfolios();
            this.zone.run(() => {
              this.portfolioForm.reset();
            });
            this.router.navigate(['/setPortafolio']);
          },
          (err) => console.log(err)
        );
    }
  }

  // this take the id from the stock that will be deleted and request to DB to be removed
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
