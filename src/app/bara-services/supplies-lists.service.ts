import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SuppliesListsService {

  userData =[];  
  check:any;
  constructor(private http: Http) {
    console.log('Suppliers list service works')
  }

  getSupplies(options) {
    return this.http.get('http://www.baraproject.nl/api/Supplies', options)
    .map(res => {
      this.check = res;
      if(this.check._body !== "0"){
        return res.json()
    }
  });
}

}
