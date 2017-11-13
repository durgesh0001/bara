import { Component, ElementRef, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { UnitsListingService } from '../../bara-services/units-listing.service';


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  userDetails: any;
  headers: any;
  options: any;
  settings:any;
  data:any;
  
  constructor(private listAccount:UnitsListingService) {   
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.options = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.options));
    
    this.settings = {
      columns: {
        Name: {
          title: 'Name'
        },
        ShortName: {
          title: 'ShortName'
        },
        Status: {
          title: 'Status'
        },
        UnitID: {
          title: 'UnitID'
        }
      }
    };

    
    // this.data = [
    //   {
    //     id: 1,
    //     name: "Leanne Graham",
    //     username: "Bret",
    //     email: "Sincere@april.biz"
    //   },
    //   {
    //     id: 2,
    //     name: "Ervin Howell",
    //     username: "Antonette",
    //     email: "Shanna@melissa.tv"
    //   },
      
    //   // ... list of items
      
    //   {
    //     id: 11,
    //     name: "Nicholas DuBuque",
    //     username: "Nicholas.Stanton",
    //     email: "Rey.Padberg@rosamond.biz"
    //   }
    // ];
    // this.listAccount.getAcountDetails(this.options).subscribe((userDetails) =>{
    //   //console.log(userData);
    //   this.userDetails = userDetails; 
    // });    
  }


  ngOnInit(): void  {
    this.getAcountDetails(); 
  }

  getAcountDetails(){
  return this.listAccount.getAcountDetails(this.options).subscribe((userDetails) =>{
    this.userDetails = userDetails;
    this.data = userDetails;
  });
  }
}

// interface userData {
//   Name: string,
//   ShortName: string,
//   Status: string,
// }
