import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateProjectService {

  constructor(private http:Http) {
    console.log('Create project service works')
   }

   projectCreate(data) {
    let headers = new Headers({ "content-type": "application/json", });
    headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post('http://www.baraproject.nl/api/Projects', data, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
