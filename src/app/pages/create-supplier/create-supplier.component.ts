import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateSupplierService } from '../../bara-services/create-supplier.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {

  headers: any;
  data: any
  CreateSupplierForm: FormGroup;
  supplierData = { Name: '', Status: '', ParentID:'', AddressLine1: '', AddressLine2: '', Number: '', FamilyName: '', City : '',  PostalCode: '', State: '', CountryID: '', EmailAddress: '', TelephoneNumber:'', BankAccount: '', PaymentMethodID: '', Notes: '', ShortName: '', CocNumber: '', VatNumber: '', DefaultSalesVatCodeID: '',  DefaultPurchaseVatCodeID: '', PaymentTerm: '', Website: '', CustomerID: '', Reference: ''
};

  constructor(private _createSupplierService: CreateSupplierService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.data = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create supplier component works');

    this.CreateSupplierForm = formBuilder.group({
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
      PaymentTerm: ['', Validators.compose([])],
      Website: ['', Validators.compose([])],
      CustomerID: ['', Validators.compose([])],
      Reference: ['', Validators.compose([])],
    });
  }

  createSupplier() {
    this._createSupplierService.supplierCreate(this.supplierData).then((supplierDetail) => {
      console.log("supplierDetail", supplierDetail)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
