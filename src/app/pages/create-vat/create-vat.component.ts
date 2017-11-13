import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateVatCodeService } from '../../bara-services/create-vat-code.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-vat',
  templateUrl: './create-vat.component.html',
  styleUrls: ['./create-vat.component.scss']
})
export class CreateVatComponent implements OnInit {
  headers: any;
  data: any
  CreateVatForm: FormGroup;
  vatData = { Name: '', ShortName: '', Type:'', Notes: ''};

  constructor(private _createVatCodeService: CreateVatCodeService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.data = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create vat component works');
    
    this.CreateVatForm = formBuilder.group({
      Name: ['', Validators.compose([])],      
      ShortName: ['', Validators.compose([])],
      Type: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
    });
  }

  createVat() {
    this._createVatCodeService.vatCodeCreate(this.vatData).then((vatDetails) => {
      console.log("vatDetails", vatDetails)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
