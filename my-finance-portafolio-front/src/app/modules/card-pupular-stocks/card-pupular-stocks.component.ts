import { Component, OnInit, Input } from '@angular/core';
import { popularStocks } from '../../models/popular-stocks.model';

@Component({
  selector: 'app-card-pupular-stocks',
  templateUrl: './card-pupular-stocks.component.html',
  styleUrls: ['./card-pupular-stocks.component.css']
})
export class CardPupularStocksComponent implements OnInit {

  @Input() stocks!: popularStocks;
  constructor() { }

  ngOnInit(): void {
  }

}
