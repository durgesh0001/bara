import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthAccountService {

  check:any;
  constructor(private http:Http) {
    //console.log('Bara account edit service works')
  }
  login(options) {
    return new Promise((resolve, reject) => {
      this.http.get('http://www.baraproject.nl/api/Account',options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
