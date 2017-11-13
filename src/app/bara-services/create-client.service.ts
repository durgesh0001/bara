import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateClientService {

  constructor(private http:Http) {
    console.log('Create Client service works')
   }

   clientCreate(data) {
    let headers = new Headers({ "content-type": "application/json", });
    headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post('http://www.baraproject.nl/api/Clients', data, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}