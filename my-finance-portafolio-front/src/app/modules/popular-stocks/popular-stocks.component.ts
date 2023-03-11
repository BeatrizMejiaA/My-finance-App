import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';

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


}
