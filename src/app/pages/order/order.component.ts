import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataTableModule } from "angular2-datatable";
import { Router } from '@angular/router';

import { OrderListService } from '../../bara-services/order-list.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderDetails: any;
  headers: any;
  options: any;

  constructor(private router:Router,private listAccount: OrderListService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));
    if(localStorage.getItem('token') != null )
    {
    }
    else
    {
      this.router.navigate(['pages', 'login']);

    }
  }

  ngOnInit(): void {
    this.getorder();
  }

  getorder() {
    return this.listAccount.getOrder(this.options).subscribe((orderDetails) => {
      this.orderDetails = orderDetails;
    });
  }

}
