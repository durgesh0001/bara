import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CreateOrderService {

  constructor(private http:Http) {
   }
   /*
    method: orderCreate
    params : order Data
    return *
    */
   orderCreate(data) {
    let headers = new Headers({ "content-type": "application/json", });
    headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post('http://www.baraproject.nl/api/Orders', data, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  /*
   method: orderUpdate
   params : order Data
   return *
   */
  orderUpdate(data,id) {
    let headers = new Headers({ "content-type": "application/json", });
    headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.put('http://www.baraproject.nl/api/Orders/'+id, data, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  /*
   method: getOrderById
   params : id
   return *
   */
  getOrderById(id) {
    let headers = new Headers({ "content-type": "application/json", });
    headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get('http://www.baraproject.nl/api/Orders/'+id, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
