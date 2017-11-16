import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateSupplierService {

  constructor(private http:Http) {
    console.log('Create Supplier service works')
   }

   supplierCreate(data) {
    let headers = new Headers({ "content-type": "application/json", });
    headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post('http://www.baraproject.nl/api/Suppliers', data, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
