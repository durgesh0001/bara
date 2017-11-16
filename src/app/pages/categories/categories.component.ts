import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { CategoriesListService } from '../../bara-services/categories-list.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriesDetails: any;
  headers: any;
  options: any;

  constructor(private listAccount:CategoriesListService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));
  }


  ngOnInit(): void  {
    this.getCategories();
  }

  getCategories(){
  return this.listAccount.getCategories(this.options).subscribe((categoriesDetails) =>{
    this.categoriesDetails = categoriesDetails;
  });
  }
}
