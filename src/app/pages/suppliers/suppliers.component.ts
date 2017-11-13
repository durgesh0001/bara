import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataTableModule } from "angular2-datatable";

import { SuppliersListService } from '../../bara-services/suppliers-list.service';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  suppliersDetails: any;
  headers: any;
  options: any;

  constructor(private listAccount: SuppliersListService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));
  }


  ngOnInit(): void {
    this.getsuppliers();
  }

  getsuppliers() {
    return this.listAccount.getSuppliers(this.options).subscribe((suppliersDetails) => {
      this.suppliersDetails = suppliersDetails;
    });
  }
  
}
