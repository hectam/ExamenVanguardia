import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../shared/models/Transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input() _Transaction: Transaction[];
  constructor() { }
  Today = Date.now();
  ngOnInit(): void {
    

   // this._Transaction.slice(Math.max(this._Transaction.length - 1,0));
  }

  AddTransaction(T: Transaction): void{
    this._Transaction.push(T);
  }

  GetAccount(T: Transaction):number{
    return Math.abs(T.AccountId);
  }
  

}
