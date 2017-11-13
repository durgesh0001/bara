import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { ProjectsListService } from '../../bara-services/projects-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectDetails: any;
  headers: any;
  options: any;
  
  constructor(private listAccount:ProjectsListService) {   
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.options = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.options));     
  }


  ngOnInit(): void  {
    this.getProjectsDetails(); 
  }

  getProjectsDetails(){
  return this.listAccount.getProjectsDetails(this.options).subscribe((projectDetails) =>{
    this.projectDetails = projectDetails;
  });
  }

}
