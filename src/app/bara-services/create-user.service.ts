import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateUserService {

  constructor(private http:Http) {
    //console.log('Create user service works')
   }  

  userCreate(data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://www.baraproject.nl/api/Account', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
