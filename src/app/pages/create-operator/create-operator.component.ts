import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateOperatorService } from '../../bara-services/create-operator.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'create-operator',
  templateUrl: './create-operator.component.html',
  styleUrls: ['./create-operator.component.scss']
})
export class CreateOperatorComponent implements OnInit {
  headers: any;
  data: any
  CreateOperatorForm: FormGroup;
  operatorData = { Name: '', Status: '', ParentID:'', AddressLine1: '', AddressLine2: '', Number: '', City : '', PostalCode: '', State: '', CountryID: '', EmailAddress: '', TelephoneNumber:'', BankAccount: '', DefaultCurrencySymbol: '', Notes: '' };

  constructor(private _createOperatorService: CreateOperatorService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.data = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create operator component works');
    
    this.CreateOperatorForm = formBuilder.group({
      UserID: ['', Validators.compose([])],
      Name: ['', Validators.compose([])],
      Status: ['', Validators.compose([])],
      ParentID: ['', Validators.compose([])],
      AddressLine1: ['', Validators.compose([])],
      AddressLine2: ['', Validators.compose([])],
      Number: ['', Validators.compose([])],
      City: ['', Validators.compose([])],
      PostalCode: ['', Validators.compose([])],
      State: ['', Validators.compose([])],
      CountryID: ['', Validators.compose([])],
      EmailAddress: ['', Validators.compose([])],
      TelephoneNumber: ['', Validators.compose([])],
      BankAccount: ['', Validators.compose([])],
      DefaultCurrencySymbol: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
    });
  } 

  createOperator() {
    this._createOperatorService.operatorCreate(this.operatorData).then((operatorDetail) => {
      console.log("operatorDetail", operatorDetail)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
