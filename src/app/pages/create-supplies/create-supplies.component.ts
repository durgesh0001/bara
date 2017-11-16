import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateSuppliesService } from '../../bara-services/create-supplies.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-supplies',
  templateUrl: './create-supplies.component.html',
  styleUrls: ['./create-supplies.component.scss']
})
export class CreateSuppliesComponent implements OnInit {

  headers: any;
  data: any
  CreateSuppliesForm: FormGroup;
  suppliesData = { Name: '', ShortName: '', Status:'', Type: '', UnitID: '', SupplierID: '', CustomerID : '',  CategoryID: '', DefaultPurchaseVatCodeID: '', DefaultSalesVatCodeID: '', PriceAmount: '', PriceValidFrom:'', DiscountValue: '', DiscountValueType: '', DiscountValidFrom: '', MarginValue: '', MarginValueType: '', MarginValidFrom: '', Notes: '', Reference: ''};


  constructor(private _createSuppliesService: CreateSuppliesService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.data = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create supplies component works');

    this.CreateSuppliesForm = formBuilder.group({
      Name: ['', Validators.compose([])],
      Status: ['', Validators.compose([])],
      Type: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
      Reference: ['', Validators.compose([])],
      ShortName: ['', Validators.compose([])],
      UnitID: ['', Validators.compose([])],
      SupplierID: ['', Validators.compose([])],
      CustomerID: ['', Validators.compose([])],
      CategoryID: ['', Validators.compose([])],
      DefaultPurchaseVatCodeID: ['', Validators.compose([])],
      DefaultSalesVatCodeID: ['', Validators.compose([])],
      PriceAmount: ['', Validators.compose([])],
      PriceValidFrom: ['', Validators.compose([])],
      DiscountValue: ['', Validators.compose([])],
      DiscountValueType: ['', Validators.compose([])],
      DiscountValidFrom: ['', Validators.compose([])],
      MarginValue: ['', Validators.compose([])],
      MarginValueType: ['', Validators.compose([])],
      MarginValidFrom: ['', Validators.compose([])],
    });

  }

  createSupplies() {
    this._createSuppliesService.suppliesCreate(this.suppliesData).then((suppliesDetail) => {
      console.log("suppliesDetail", suppliesDetail)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
