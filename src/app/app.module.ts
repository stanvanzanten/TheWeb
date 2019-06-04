import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes : Routes =[
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent, data: { animation: 'isRight'}},
  {path:'portfolio', component: PortfolioComponent},
  {path:'pricing', component: PricingComponent, data: {animation: 'isRight'}}
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
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
