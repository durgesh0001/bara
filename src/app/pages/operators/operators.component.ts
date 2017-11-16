import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { OperatorListService } from '../../bara-services/operator-list.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  test: any;
  operatorsDetails: any;
  headers: any;
  options: any

  constructor(private operatorAccount:OperatorListService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));

    this.operatorAccount.getAcountDetails(this.options).subscribe((opratorData) =>{
      //console.log(opratorData);
      this.operatorsDetails = opratorData;
    });
  }

  ngOnInit() {
  }

}
