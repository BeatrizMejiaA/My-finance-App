import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { popularStocks } from 'src/app/models/popular-stocks.model';

@Component({
  selector: 'app-popular-stocks',
  templateUrl: './popular-stocks.component.html',
  styleUrls: ['./popular-stocks.component.css'],
})
export class PopularStocksComponent implements OnInit {
  stocks: any = [];

  constructor(private stocksService: StocksService) {}

  ngOnInit(): void {
    this.stocksService
      .getStocks()
      .subscribe((response) => console.log(this.stocks = response.results.slice(0, 10)));

  }

 /* ngOnInit(): void {
    this.stocksService.getData()
      .then(data => {
        (this.stocks = console.log(data));
      })
      .catch(error => console.error(error));
  }*/
}
