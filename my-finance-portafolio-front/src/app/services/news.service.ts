import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiNewsUrl = 'https://api.polygon.io/v2/reference/news?apiKey=siJxBRmPTrVg49FSCvaH7aDqgdJVSyw6';

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get(this.apiNewsUrl);
  }
}
