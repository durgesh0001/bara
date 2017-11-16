import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { CustomersService } from '../../bara-services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customerDetails: any;
  headers: any;
  options: any;

  constructor(private router:Router,private listAccount:CustomersService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));

    // this.listAccount.getAcountDetails(this.options).subscribe((userDetails) =>{
    //   //console.log(userData);
    //   this.userDetails = userDetails;
    // });
    if(localStorage.getItem('token') != null )
    {
    }
    else
    {
      this.router.navigate(['pages', 'login']);

    }
  }


  ngOnInit(): void  {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
  return this.listAccount.getCustomerDetails(this.options).subscribe((customerDetails) =>{
    this.customerDetails = customerDetails;
  });
  }

}
