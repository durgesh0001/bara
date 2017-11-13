import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataTableModule } from "angular2-datatable";

import { InvoiceListService } from '../../bara-services/invoice-list.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoiceDetails: any;
  headers: any;
  options: any;

  constructor(private listAccount: InvoiceListService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));
  }

  ngOnInit(): void {
    this.getinvoice();
  }

  getinvoice() {
    return this.listAccount.getInvoice(this.options).subscribe((invoiceDetails) => {
      this.invoiceDetails = invoiceDetails;
    });
  }

}
