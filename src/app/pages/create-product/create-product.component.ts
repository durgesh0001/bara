import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateProductService } from '../../bara-services/create-product.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  headers: any;
  data: any
  CreateProductForm: FormGroup;
  productData = { Name: '', Status: '', ParentID:'', CustomerID: '', ShortName: '', Tags: '', ProductItemSupplyID:'', ProductItemDescription: '', ProductItemQuantity: '' };


  constructor(private _createProductService: CreateProductService, public formBuilder: FormBuilder) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.data = new RequestOptions({ headers: this.headers });    
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create product component works');
    
    this.CreateProductForm = formBuilder.group({
      CustomerID: ['', Validators.compose([])],
      Name: ['', Validators.compose([])],
      Status: ['', Validators.compose([])],
      ParentID: ['', Validators.compose([])],     
      Tags: ['', Validators.compose([])],
      ShortName: ['', Validators.compose([])],
      ProductItemSupplyID: ['', Validators.compose([])],     
      ProductItemDescription: ['', Validators.compose([])],
      ProductItemQuantity: ['', Validators.compose([])],
    });

  } 

  createProduct() {
    this._createProductService.productCreate(this.productData).then((productDetail) => {
      console.log("productDetail", productDetail)
    }, (err) => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}