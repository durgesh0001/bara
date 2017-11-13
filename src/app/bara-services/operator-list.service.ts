import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class OperatorListService {

  constructor(private http: Http) {
    console.log('Operator list service works')
  }

  getAcountDetails(options) {
    return this.http.get('http://www.baraproject.nl/api/Operators', options).map(res => res.json());
  }

}
