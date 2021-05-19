import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../shared/models/Account';

@Component({
  selector: 'app-acconts',
  templateUrl: './acconts.component.html',
  styleUrls: ['./acconts.component.css']
})
export class AccontsComponent implements OnInit {

  @Input() _Accounts:Account[];
  
  constructor() { }

  ngOnInit(): void {
    
  }

  

}
