import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as _ from "lodash";


@Injectable()
export class ProjectsListService {
  projectlistData:any;
  check:any;
  constructor(private http: Http) {
    console.log('Projects list service works')
  }

  getProjectsDetails(options) {
    return this.http.get('http://www.baraproject.nl/api/Projects', options)
    .map(res => {
      this.check = res;
      if(this.check._body !== "0"){
        this.projectlistData = _.map(res.json(),(val)=>{
          return {...val}
        });
        return this.projectlistData;
    }
  });
}
}
