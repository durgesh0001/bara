import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateCustomerService } from '../../bara-services/create-customer.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  headers: any;
  data: any
  CreateCustomerForm: FormGroup;
  customerData = { Name: '', Status: '', ParentID:'', AddressLine1: '', AddressLine2: '', Number: '', City : '', PostalCode: '', State: '', CountryID: '', EmailAddress: '', TelephoneNumber:'', BankAccount: '', Notes: '', ShortName: '', CocNumber: '', VatNumber: '', DefaultSalesVatCodeID: '', DefaultPurchaseVatCodeID: '', SubscriptionPaymentMethod: '', PaymentTerm: '', Website: '', OrderNumberPrefix: '', OrderFooterHtml: '', InvoiceFooterHtml: '', InvoiceNumberPrefix: '' };

  constructor(private _createCustomerService: CreateCustomerService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.data = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create customer component works');
    
    this.CreateCustomerForm = formBuilder.group({
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
      Notes: ['', Validators.compose([])],
      ShortName: ['', Validators.compose([])],
      CocNumber: ['', Validators.compose([])],
      VatNumber: ['', Validators.compose([])],
      DefaultSalesVatCodeID: ['', Validators.compose([])],
      DefaultPurchaseVatCodeID: ['', Validators.compose([])],
      SubscriptionPaymentMethod: ['', Validators.compose([])],
      PaymentTerm: ['', Validators.compose([])],
      Website: ['', Validators.compose([])],
      OrderNumberPrefix: ['', Validators.compose([])],
      OrderFooterHtml: ['', Validators.compose([])],
      InvoiceFooterHtml: ['', Validators.compose([])],
      InvoiceNumberPrefix: ['', Validators.compose([])],
    });
  } 

  createCustomer() {
    this._createCustomerService.customerCreate(this.customerData).then((customerDetail) => {
      console.log("customerDetail", customerDetail)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
