import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private apiUrl =
    'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09';
  private apiKey = 'siJxBRmPTrVg49FSCvaH7aDqgdJVSyw6';

  constructor(private http: HttpClient) {}

  /*getStocks() {
    const params = new HttpParams().set('limit', '10');
    return this.http.get(this.apiURL, { params });
  }*/

  getStocks(){
    const params = new HttpParams()
      .set('adjusted', 'true')
      .set('apiKey', this.apiKey)
      .set('limit', '1');
    return this.http.get<any>(this.apiUrl, { params });
  }


}
