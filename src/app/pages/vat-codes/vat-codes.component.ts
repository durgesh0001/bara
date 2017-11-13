import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { VatCodeService } from '../../bara-services/vat-code.service';

@Component({
  selector: 'app-vat-codes',
  templateUrl: './vat-codes.component.html',
  styleUrls: ['./vat-codes.component.scss']
})
export class VatCodesComponent implements OnInit {

  vatDetails: any;
  headers: any;
  options: any;
  
  constructor(private listAccount:VatCodeService) {   
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.options = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.options));
  }

  ngOnInit(): void  {
    this.getVatDetails(); 
  }

  getVatDetails(){
  return this.listAccount.getVatDetails(this.options).subscribe((vatDetails) =>{
    this.vatDetails = vatDetails;
  });
  }

}
