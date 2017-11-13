import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateOrderService } from '../../bara-services/create-order.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from '../../bara-services/customers.service';
import { OrderListService } from '../../bara-services/order-list.service';
import { SuppliersListService } from '../../bara-services/suppliers-list.service';
import { ProjectsListService } from '../../bara-services/projects-list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../ui-features/modals/modal/modal.component';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  headers: any;
  data: any;
  options: any;
  orderDetails:any;
  projectDetails: any;

  CreateOrderForm: FormGroup;
  customerDetails : any;
  suppliersDetails: any;
  orderData = { CustomerID: '', ClientID: '', SupplierID: '', ProjectID: '', QuotationID: '', Number: '', Revision: '', Type: '', Status: '', Description1: '', Description2: '', Reference: '', Date: '', Notes: '', OrderItemSupplyID: '', OrderItemProjectID: '', OrderItemDescription: '', OrderItemReference: '', OrderItemQuantity: '', OrderItemPrice: '', OrderItemAllowancePercent: '', OrderItemAllowanceFixed: '', OrderItemVatCodeID: '' };

  constructor(private _createOrderService: CreateOrderService, public formBuilder: FormBuilder,private listAccount:CustomersService,private listOrders: OrderListService,private listSupplierData: SuppliersListService,private listProducts:ProjectsListService,private modalService: NgbModal) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.options = new RequestOptions({ headers: this.headers });
    this.data = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.data));
    console.log('Create order component works');
    this.CreateOrderForm = formBuilder.group({
      CustomerID: ['', Validators.compose([])],
      ClientID: ['', Validators.compose([])],
      SupplierID: ['', Validators.compose([])],
      ProjectID: ['', Validators.compose([])],
      QuotationID: ['', Validators.compose([])],
      Number: ['', Validators.compose([])],
      Revision: ['', Validators.compose([])],
      Type: ['', Validators.compose([])],
      Status: ['', Validators.compose([])],
      Description1: ['', Validators.compose([])],
      Description2: ['', Validators.compose([])],
      Reference: ['', Validators.compose([])],
      Date: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
      OrderItemSupplyID: ['', Validators.compose([])],
      OrderItemProjectID: ['', Validators.compose([])],
      OrderItemDescription: ['', Validators.compose([])],
      OrderItemReference: ['', Validators.compose([])],
      OrderItemQuantity: ['', Validators.compose([])],
      OrderItemPrice: ['', Validators.compose([])],
      OrderItemAllowancePercent: ['', Validators.compose([])],
      OrderItemAllowanceFixed: ['', Validators.compose([])],
      OrderItemVatCodeID: ['', Validators.compose([])],
    });


  }

  createOrder() {
  this.orderData.ClientID = "c40ad34a-7353-432d-bd00-34dbc85a9f0e";
    this._createOrderService.orderCreate(this.orderData).then((orderDetail) => {
      this.getorder();
    }, (err) => {
         this.showStaticModal('Error','Something is wrong,Please try again');
    });
  }

  showStaticModal(type,msg) {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = type;
    activeModal.componentInstance.modalContent = msg;
  }
  ngOnInit(): void  {
    this.getCustomerDetails();
    this.getorder();
    this.listSupplier();
    this.getProjectsDetails();
  }

  getorder() {
    return this.listOrders.getOrder(this.options).subscribe((orderDetails) => {
      this.orderDetails = orderDetails;
    });
  }

  getCustomerDetails(){
    return this.listAccount.getCustomerDetails(this.options).subscribe((customerDetails) =>{
      this.customerDetails = customerDetails;
    });
  }

  listSupplier() {
    return this.listSupplierData.getSuppliers(this.options).subscribe((suppliersDetails) => {
      this.suppliersDetails = suppliersDetails;
    });
  }

  getProjectsDetails(){
    return this.listProducts.getProjectsDetails(this.options).subscribe((projectDetails) =>{
      this.projectDetails = projectDetails;
    });
  }

}
