import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { ClientListService } from '../../bara-services/client-list.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientDetails: any;
  headers: any;
  options: any;

  constructor(private operatorAccount:ClientListService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));

    this.operatorAccount.getClientDetails(this.options).subscribe((clientData) =>{
      this.clientDetails = clientData;
    });
  }

  ngOnInit() {
  }

}
