import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateClientService } from '../../bara-services/create-client.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  headers: any;
  data: any
  CreateClientForm: FormGroup;
  clientData = { Name: '', Status: '', ParentID:'', AddressLine1: '', AddressLine2: '', Number: '', City : '',  PostalCode: '', State: '', CountryID: '', EmailAddress: '', TelephoneNumber:'', BankAccount: '', PaymentMethodID: '', Notes: '', ShortName: '', CocNumber: '', VatNumber: '', DefaultSalesVatCodeID: '',  DefaultPurchaseVatCodeID: '', GivenName: '', PaymentTerm: '', Website: '', CustomerID: '', Gender: '',  Initials: '', Insertion: '', FamilyName: '', Type: ''
};

  constructor(private _createClientService: CreateClientService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.data = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create client component works');
    
    this.CreateClientForm = formBuilder.group({
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
      PaymentMethodID: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
      ShortName: ['', Validators.compose([])],
      CocNumber: ['', Validators.compose([])],
      VatNumber: ['', Validators.compose([])],
      DefaultSalesVatCodeID: ['', Validators.compose([])],
      DefaultPurchaseVatCodeID: ['', Validators.compose([])],
      GivenName: ['', Validators.compose([])],
      PaymentTerm: ['', Validators.compose([])],
      Website: ['', Validators.compose([])],
      CustomerID: ['', Validators.compose([])],
      Gender: ['', Validators.compose([])],
      Initials: ['', Validators.compose([])],
      Insertion: ['', Validators.compose([])],
      FamilyName: ['', Validators.compose([])],
      Type: ['', Validators.compose([])],
    });
  } 

  createClient() {
    this._createClientService.clientCreate(this.clientData).then((clientDetail) => {
      console.log("clientDetail", clientDetail)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
