import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersListService {

  constructor(private http: Http) {
    //console.log('User list service works')
  }
  //  http://www.baraproject.nl/api/Account

  //  getAcountDetails(){
  //     return this.http.get('http://jsonplaceholder.typicode.com/users').map(res => res.json());
  //   }

  getAcountDetails(options) {
    return this.http.get('http://www.baraproject.nl/api/Users', options).map(res => res.json());
  }

}
