import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../shared/models/Transaction';
import { Account } from '../../shared/models/Account';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  _Transaction: Transaction;
  
  @Input() Income : number; 
  @Input() Expense : number;
  Total: number;
  
  constructor() { }

  ngOnInit(): void {
    
    
    
  }

  GetTotal(income:number, expense:number): number {
    return (income -expense);
  }
}
