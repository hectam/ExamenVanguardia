import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './home/summary/summary.component';
import { AccontsComponent } from './home/acconts/acconts.component';
import { TransactionComponent } from './home/transaction/transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummaryComponent,
    AccontsComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
