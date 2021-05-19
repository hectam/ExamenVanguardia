import { Component, OnInit } from '@angular/core';
import { Transaction } from '../shared/models/Transaction';
import { Account } from '../shared/models/Account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  _Transaction: Transaction[];
  _Accounts:Account[];
  Mcounter:number;
  ngOnInit(): void {

    this._Transaction = [
      {
        Id : -5,
        Amount : 500,
        AccountId : -1,
        Description : "Salario",
        TrasactionDate : Date.now()
    },
    
    {
        Id : -1,
        Amount : -20,
        AccountId : -1,
        Description : "Comida Dennys",
        TrasactionDate : Date.now()
    },
   
    {
        Id : -2,
        Amount : 1500,
        AccountId : -2,
        Description : "Salario",
        TrasactionDate : Date.now()
    },
  
    {
        Id : -3,
        Amount : -5,
        AccountId : -1,
        Description : "Corte de pelo",
        TrasactionDate : Date.now()
       
    }
    ];
    this._Accounts = [
      {
        Id : -1,
        Amount : 475,
        Currency : "USD",
        Name : "Cuenta en dolares 1",
        ConversionRate : 1
    },
    
    {
        Id : -2,
        Amount : 1500,
        Currency : "EUR",
        Name : "Cuenta en euros única",
        ConversionRate : 1.18
    },
    
    {
        Id : -3,
        Amount : 500,
        Currency : "USD",
        Name : "Cuenta en dolares 2",
        ConversionRate : 1
    }
    ];
  }
  GetIncome():number{
    
    this.Mcounter = 0;

    this._Accounts.forEach(element => {
      this.Mcounter += element.Amount * element.ConversionRate;
    });

    return this.Mcounter;

  }

  
}
