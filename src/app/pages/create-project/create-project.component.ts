import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateProjectService } from '../../bara-services/create-project.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  headers: any;
  data: any
  CreateProjectForm: FormGroup;
  projectData = { Name: '', Status: '', ParentID:'', ShortName: '', CustomerID: '', ClientID: '', Description:'', StartDate: '', EndDate: '', //Client: '', Customer: ''
  };

  constructor(private _createProjectService: CreateProjectService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.data = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create customer component works');

    this.CreateProjectForm = formBuilder.group({
      Name: ['', Validators.compose([])],
      Status: ['', Validators.compose([])],
      ParentID: ['', Validators.compose([])],
      ShortName: ['', Validators.compose([])],
      CustomerID: ['', Validators.compose([])],
      ClientID: ['', Validators.compose([])],
      Description: ['', Validators.compose([])],
      StartDate: ['', Validators.compose([])],
      EndDate: ['', Validators.compose([])],
      //Client: ['', Validators.compose([])],
      //Customer: ['', Validators.compose([])],
    });
  }

  createProject() {
    this._createProjectService.projectCreate(this.projectData).then((projectDetail) => {
      console.log("projectDetail", projectDetail)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
