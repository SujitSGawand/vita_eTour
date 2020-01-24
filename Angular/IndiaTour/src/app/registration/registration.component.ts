import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signinform: FormGroup;
  constructor(private router: Router, private _activatedRoute: ActivatedRoute, private _regservice: CustomerServiceService) { }

  ngOnInit() {
    this.restForm();
  }
  restForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this._regservice.customer = {
      customername: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      pin: null,
      telno: '',
      mobileno: ''
    }
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  insertRecord(form: NgForm) {
    this._regservice.Postcustomer(form.value).subscribe(res => { this.restForm(form) })
  }
}


