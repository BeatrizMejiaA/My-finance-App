import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './modules/navbar/navbar/navbar.component';
import { PopularStocksComponent } from './modules/popular-stocks/popular-stocks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PopularStocksComponent
  },
  {
    path: 'popular-stocks',
    component: PopularStocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
