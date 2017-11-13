import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateInvoiceService } from '../../bara-services/create-invoice.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  headers: any;
  data: any
  CreateInvoiceForm: FormGroup;
  invoiceData = { CustomerID: '', ClientID: '', SupplierID: '', ProjectID: '', OrderID: '', Number: '', SubscriptionID: '', Type: '', Status: '', Description1: '', Description2: '', Reference: '', Date: '', Notes: '', PaymentDate: '', IsDisputed: '', InvoiceLineSupplyID: '', DueDate: '', InvoiceLineProjectID: '', InvoiceLineDescription: '', InvoiceLineQuantity: '', InvoiceLineAmount: '', InvoiceLineAllowancePercent: '', InvoiceLineAllowanceFixed: '', InvoiceLineVatCodeID: '', SubscriptionPeriodStartDate: '', SubscriptionPeriodEndDate: ''};

  constructor(private _createInvoiceService: CreateInvoiceService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.data = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create invoice component works');
    this.CreateInvoiceForm = formBuilder.group({
      CustomerID: ['', Validators.compose([])],
      ClientID: ['', Validators.compose([])],
      SupplierID: ['', Validators.compose([])],
      ProjectID: ['', Validators.compose([])],
      OrderID: ['', Validators.compose([])],     
      Number: ['', Validators.compose([])],
      SubscriptionID: ['', Validators.compose([])],
      Type: ['', Validators.compose([])],
      Status: ['', Validators.compose([])],
      Description1: ['', Validators.compose([])],
      Description2: ['', Validators.compose([])],     
      Reference: ['', Validators.compose([])],
      Date: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
      PaymentDate: ['', Validators.compose([])],
      IsDisputed: ['', Validators.compose([])],
      InvoiceLineSupplyID: ['', Validators.compose([])],
      DueDate: ['', Validators.compose([])],     
      InvoiceLineProjectID: ['', Validators.compose([])],
      InvoiceLineDescription: ['', Validators.compose([])],
      InvoiceLineQuantity: ['', Validators.compose([])],
      InvoiceLineAmount: ['', Validators.compose([])],
      InvoiceLineAllowancePercent: ['', Validators.compose([])],
      InvoiceLineAllowanceFixed: ['', Validators.compose([])],
      InvoiceLineVatCodeID: ['', Validators.compose([])],
      SubscriptionPeriodStartDate: ['', Validators.compose([])],
      SubscriptionPeriodEndDate: ['', Validators.compose([])],
    });
 

  } 

  createInvoice() {
    this._createInvoiceService.invoiceCreate(this.invoiceData).then((invoiceDetail) => {
      console.log("invoiceDetail", invoiceDetail)
    }, (err) => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}



// CustomerID
// SupplierID
// ClientID
// ProjectID
// OrderID
// SubscriptionID
// Number
// Type
// Status
// Description1
// Description2
// Reference
// Date
// DueDate
// PaymentDate
// IsDisputed
// InvoiceLineSupplyID
// InvoiceLineProjectID
// InvoiceLineDescription
// InvoiceLineQuantity
// InvoiceLineAmount
// InvoiceLineAllowancePercent
// InvoiceLineAllowanceFixed
// InvoiceLineVatCodeID
// SubscriptionPeriodStartDate
// SubscriptionPeriodEndDate
// Notes