import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataTableModule } from "angular2-datatable";

import { ProductListService } from '../../bara-services/product-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsDetails: any;
  headers: any;
  options: any;

  constructor(private listAccount: ProductListService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));
  }


  ngOnInit(): void {
    this.getproducts();
  }

  getproducts() {
    return this.listAccount.getProducts(this.options).subscribe((productsDetails) => {
      this.productsDetails = productsDetails;
    });
  }


}
