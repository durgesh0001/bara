import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateCategoriesService } from '../../bara-services/create-categories.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent implements OnInit {

  headers: any;
  data: any
  CreateCategoriesForm: FormGroup;
  categoriesData = { Name: '', Status: '', ParentID:'', Notes: '', ShortName: '', CategoryStatus: '', VatCodeID: '',  CustomerID: '', SupplierID: '', DiscountValue: '', DiscountValueType: '', DiscountValidFrom: '', MarginValue: '', MarginValueType: '', MarginValidFrom: '' } 
  
  constructor(private _createCategoriesService: CreateCategoriesService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.data = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create categories component works');
    
    this.CreateCategoriesForm = formBuilder.group({
      Name: ['', Validators.compose([])],
      Status: ['', Validators.compose([])],
      ParentID: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
      ShortName: ['', Validators.compose([])],
      CategoryStatus: ['', Validators.compose([])],
      VatCodeID: ['', Validators.compose([])],
      GivenName: ['', Validators.compose([])],
      PaymentTerm: ['', Validators.compose([])],
      Website: ['', Validators.compose([])],
      CustomerID: ['', Validators.compose([])],
      SupplierID: ['', Validators.compose([])],
      DiscountValue: ['', Validators.compose([])],
      DiscountValueType: ['', Validators.compose([])],
      DiscountValidFrom: ['', Validators.compose([])],
      MarginValue: ['', Validators.compose([])],
      MarginValueType: ['', Validators.compose([])],
      MarginValidFrom: ['', Validators.compose([])],
    });

  
  } 

  createCategories() {
    this._createCategoriesService.categoriesCreate(this.categoriesData).then((categoriesDetail) => {
      console.log("categoriesDetail", categoriesDetail)
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
