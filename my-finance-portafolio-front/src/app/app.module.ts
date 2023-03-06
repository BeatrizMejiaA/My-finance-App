import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar/navbar.component';
import { PopularStocksComponent } from './modules/popular-stocks/popular-stocks.component';
import { NewsComponent } from './modules/news/news.component';
import { SetPortafolioComponent } from './modules/set-portafolio/set-portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularStocksComponent,
    NewsComponent,
    SetPortafolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
