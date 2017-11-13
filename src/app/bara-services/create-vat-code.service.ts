import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateVatCodeService {

  constructor(private http:Http) {
    console.log('Create vat code service works')
   }

   vatCodeCreate(data) {
    let headers = new Headers({ "content-type": "application/json", });
    headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post('http://www.baraproject.nl/api/vatcodes', data, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
