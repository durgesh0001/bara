import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateUnitService } from '../../bara-services/create-unit.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-unit',
  templateUrl: './create-unit.component.html',
  styleUrls: ['./create-unit.component.scss']
})
export class CreateUnitComponent implements OnInit {
  headers: any;
  data: any
  CreateUnitForm: FormGroup;
  unitData = { Name: '', ShortName: '', Tags:'', Status: '', Notes: ''};

  constructor(private _createUnitService: CreateUnitService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.data = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create Unit component works');

    this.CreateUnitForm = formBuilder.group({
      Name: ['', Validators.compose([])],
      ShortName: ['', Validators.compose([])],
      Tags: ['', Validators.compose([])],
      Status: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
    });
  }

  createUnit() {
    this._createUnitService.unitCreate(this.unitData).then((unitDetails) => {
      console.log("unitDetails", unitDetails)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
