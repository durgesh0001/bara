import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EditAccountService {

  constructor(private http:Http) {
    //console.log('Bara account edit service works')
   }


  userDetailupdate(data) {
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
  login(data) {
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

  //  Test API start
  //gerCurrentTime() {
  //   return this.http.get('http://date.jsontest.com/').map(res => res.json())
  // }

  // postJSON(){
  //   var json = JSON.stringify({var1: 'test', var2: 3});
  //   var param = 'json=' + json;
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.post(' http://validate.jsontest.com', param, {
  //   headers: headers
  //   })
  //   .map(res => res.json())
  // }
  //  Test API end

    // getAcountDetails(){
    //   return this.accountEdit.get('http://jsonplaceholder.typicode.com/users').map(res => res.json());
    // }

}
