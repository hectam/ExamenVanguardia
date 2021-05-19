import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../shared/models/Account';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = "http://localhost:64439";

  constructor(private httpClient : HttpClient) { }

  getPosts() : Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseUrl}/`);
  }


}