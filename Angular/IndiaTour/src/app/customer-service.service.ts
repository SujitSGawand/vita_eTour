import { Injectable } from '@angular/core';
import { Iregistration } from './iregistration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customer:Iregistration;
  url="http://localhost:50153/api/";
  
  constructor(private http: HttpClient) { }

  Postcustomer(customer:Iregistration)
  {
    return this.http.post(this.url+"Customer",customer);
  }
}
