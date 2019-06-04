import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';


const appRoutes : Routes =[
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent, data: { animation: 'isRight' }},
  {path:'portfolio', component: PortfolioComponent, data: { animation: 'isLeft' }},
  {path:'pricing', component: PricingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
