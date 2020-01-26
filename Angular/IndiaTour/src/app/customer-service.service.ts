import { Injectable } from '@angular/core';
import { Iregistration } from './iregistration';
import { HttpClient } from '@angular/common/http';
import { IPassengerDetails } from './ipassenger-details';
import { BookingDetails } from './booking-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
 
  customer:Iregistration;
  passenger:IPassengerDetails;
  url="http://localhost:50153/api/";
  
  constructor(private http: HttpClient) { }

  Postcustomer(customer:Iregistration)
  {
    return this.http.post(this.url+"Customer",customer);
  }

  GetBookingId(email:string)
  {
    return this.http.get<number[]>(this.url+"BookingDetails/?email="+email);
  }
  
  GetCustomerId(email:string)
  {
    return this.http.get<number[]>(this.url+"Customer/?email="+email);
  }
  InitiateBooking(booking:BookingDetails)
  {
    return this.http.post(this.url+"BookingDetails",booking);
  }

  postpassenger(PassObj:IPassengerDetails)
  {
    console.log(PassObj);
    return this.http.post(this.url+"PassengerDetails1",PassObj);
  }

}
