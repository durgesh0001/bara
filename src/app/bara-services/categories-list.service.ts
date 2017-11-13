import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesListService {

  userData =[];  
  check:any;
  constructor(private http: Http) {
    console.log('Categories list service works')
  }

  getCategories(options) {
    return this.http.get('http://www.baraproject.nl/api/Categories', options)
    .map(res => {
      this.check = res;
      if(this.check._body !== "0"){
        return res.json()
    }
  });
}

}
