import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DataTableModule} from "angular2-datatable";


import { UsersListService } from '../../bara-services/users-list.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // settings = {
  //   columns: {
  //     id: {
  //       title: 'ID'
  //     },
  //     name: {
  //       title: 'Full Name'
  //     },
  //     username: {
  //       title: 'User Name'
  //     },
  //     email: {
  //       title: 'Email'
  //     }
  //   }
  // };

  test: any;
  userDetails: any;
  headers: any;
  options: any

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  // data = [
  //   {
  //     name: "userData Graham",
  //     type: "Leanne",
  //     role: "Bret",
  //     email: "Sincere@april.biz",
  //     status: "Bret"
  //   },
  //   {
  //     name: "Ervin Howell",
  //     type: "Graham",
  //     role: "Antonette",
  //     email: "Shanna@melissa.tv",
  //     status: "Bret"
  //   },
  //   {
  //     name: "Nicholas DuBuque",
  //     type: "Leanne",
  //     role: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz",
  //     status: "Bret"
  //   }
  // ];

  source: UsersListService;

  constructor(private listAccount:UsersListService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));

    this.listAccount.getAcountDetails(this.options).subscribe((userData) =>{
      //console.log(userData);
      this.userDetails = userData;
    });
  }


  ngOnInit() {
  }

}
