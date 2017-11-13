import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InvoiceListService {

  userData =[];  
  check:any;
  constructor(private http: Http) {
    console.log('Invoice list service works')
  }

  getInvoice(options) {
    return this.http.get('http://www.baraproject.nl/api/Invoices', options)
    .map(res => {
      this.check = res;
      if(this.check._body !== "0"){
        return res.json()
    }
  });
}

}
