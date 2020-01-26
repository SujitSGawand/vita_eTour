import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Iregistration } from '../iregistration';
import { Registration } from '../registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
regForm: NgModel;
regObj : Iregistration;
  
  constructor(private router: Router, private _activatedRoute: ActivatedRoute,
     private _regservice: CustomerServiceService) { }

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

  
  getObj(form:NgForm)
  {
    this.regObj = new Registration('','','','','','','',null,'','')
    this.regObj.email = form.controls.email.value; 
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
    this.getObj(form);
    let email:any = this.regObj.email;
    alert(email);
    localStorage.setItem("passemail",email);
    //this.router.navigate(['/booking']);
    
  }
  insertRecord(form: NgForm) {
    this._regservice.Postcustomer(form.value).subscribe(res => { this.restForm(form);})
    
    }
}


