import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataTableModule } from "angular2-datatable";

import { SuppliesListsService } from '../../bara-services/supplies-lists.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss']
})
export class SuppliesComponent implements OnInit {

  suppliesDetails: any;
  headers: any;
  options: any;

  constructor(private listAccount: SuppliesListsService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));
  }


  ngOnInit(): void {
    this.getsupplies();
  }

  getsupplies() {
    return this.listAccount.getSupplies(this.options).subscribe((suppliesDetails) => {
      this.suppliesDetails = suppliesDetails;
    });
  }

}
