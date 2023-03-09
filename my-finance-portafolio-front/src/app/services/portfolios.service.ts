import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Portfolio } from '../interfaces/portfolio.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfoliosService {
  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${this.BASE_URL}/portfolios/`);
  }
  getPortfolio(id: string): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.BASE_URL}/portfolios/${id}`);
  }
  createPortfolios(portfolio: Portfolio): Observable<Portfolio> {
    return this.http.post<Portfolio>(
      `${this.BASE_URL}/portfolios/`,
      portfolio
    );
  }
  deletePortfolios(id: number): Observable<Portfolio> {
    return this.http.delete<Portfolio>(`${this.BASE_URL}/portfolios/${id}`);
  }
}
