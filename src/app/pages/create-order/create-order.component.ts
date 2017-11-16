import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateOrderService } from '../../bara-services/create-order.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from '../../bara-services/customers.service';
import { OrderListService } from '../../bara-services/order-list.service';
import { SuppliersListService } from '../../bara-services/suppliers-list.service';
import { ProjectsListService } from '../../bara-services/projects-list.service';
import {VatCodeService} from "../../bara-services/vat-code.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../ui-features/modals/modal/modal.component';
import {SuppliesListsService} from "../../bara-services/supplies-lists.service";
import { Router,ActivatedRoute } from '@angular/router';
import { NgDatepickerModule,DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  headers: any;
  data: any;
  options: any;
  projectDetails: any;
  vatCodesDetails :any;
  OrderLabel:any;
  totalExcludingVatAmount: any
  totalIncludingVatAmount: any
  totalVatAmount: any

  CreateOrderForm: FormGroup;
  customerDetails : any;
  suppliersDetails: any;
  supplyDetails :any;
  showDatePicker:boolean;
  orderId:any;
  ButtonLabel:any;
  orderDataTemp:any;
  orderData = { CustomerID: '', SupplierID: '', ProjectID: '', QuotationID: '', Number: '', Revision: '', Type: '', Status: '', Description1: '', Description2: '', Reference: '', Date: new Date(), Notes: '', OrderItemSupplyID: '', OrderItemProjectID: '', OrderItemDescription: '', OrderItemReference: '', OrderItemQuantity: '', OrderItemPrice: '', OrderItemAllowancePercent: '', OrderItemAllowanceFixed: '', OrderItemVatCodeID: '' };
  optionsDate: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MM/DD/YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0
};
  constructor(private _activeRoute:ActivatedRoute,private router:Router,private _vatCodeSerive:VatCodeService,private _supplies:SuppliesListsService,private _createOrderService: CreateOrderService, public formBuilder: FormBuilder,private listAccount:CustomersService,private listOrders: OrderListService,private listSupplierData: SuppliersListService,private listProjects:ProjectsListService,private modalService: NgbModal) {

    this.showDatePicker = false;
    this.ButtonLabel = "Create Order";
    this.OrderLabel = this.ButtonLabel;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    this.data = new RequestOptions({ headers: this.headers });
    this.totalExcludingVatAmount = 0;
    this.totalIncludingVatAmount = 0;
    this.totalVatAmount = 0;
    localStorage.setItem("header", JSON.stringify(this.data));
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
    if(localStorage.getItem('token') != null )
    {
    }
    else
    {
      this.router.navigate(['pages', 'login']);
    }
  }

  getErrorMessage(errorMsg)
  {
    if(errorMsg._body !== "0"){
      let obj = JSON.parse(errorMsg._body);
      if(obj.ModelState)
      {
        for(let key in obj.ModelState)
        {
          this.showStaticModal('Error '+key,obj.ModelState[key][0]);
        }
      }
      else
      {
        this.showStaticModal('Error','Some thing is wrong,Please try again');
      }
    }
  }

  createOrder() {
    if(this.orderId)
    {
      this._createOrderService.orderUpdate(this.orderData,this.orderId).then((orderDetail) => {
        this.showStaticModal('Success',"Order has been updated successfully");
        this.router.navigate(['pages', 'order']);

      }, (err) => {
        this.getErrorMessage(err);
      });

    }
    else
    {
      this._createOrderService.orderCreate(this.orderData).then((orderDetail) => {
        this.showStaticModal('Success',"Order has been submitted successfully");
        this.router.navigate(['pages', 'order']);

      }, (err) => {
        this.getErrorMessage(err);
      });
    }

  }

  getSupplies()
  {
    return this._supplies.getSupplies(this.options).subscribe((supplyDetailsData) => {
      this.supplyDetails = supplyDetailsData;
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
    this.orderId = this._activeRoute.snapshot.params['orderId'];
    this.getOrderDetailById(this.orderId);
    this.getCustomerDetails();
    this.listSupplier();
    this.getProjectsDetails();
    this.getVatCodeDetails();
    this.getSupplies();
  }

  getCustomerDetails(){
    return this.listAccount.getCustomerDetails(this.options).subscribe((customerDetails) =>{
      this.customerDetails = customerDetails;
    });
  }

  getVatCodeDetails(){
    return this._vatCodeSerive.getVatDetails(this.options).subscribe((vatCodesDetails) =>{
      this.vatCodesDetails = vatCodesDetails;
    });
  }

  listSupplier() {
    return this.listSupplierData.getSuppliers(this.options).subscribe((suppliersDetails) => {
      this.suppliersDetails = suppliersDetails;
    });
  }

  getProjectsDetails(){
    return this.listProjects.getProjectsDetails(this.options).subscribe((projectDetailsData) =>{
      this.projectDetails = projectDetailsData;
    });
  }
  getOrderDetailById(id)
  {
    if(id)
    {
      this.ButtonLabel = "Update Order";
      this.OrderLabel = this.ButtonLabel;
      this._createOrderService.getOrderById(id).then((orderDetailData) => {
        this.orderDataTemp = orderDetailData;
        this.orderData.Number = this.orderDataTemp.Number;
        this.orderData.Revision = this.orderDataTemp.Revision;

        this.orderData.CustomerID = this.orderDataTemp.Customer.CustomerID;
        this.orderData.Type = this.orderDataTemp.Type;

        this.orderData.SupplierID = this.orderDataTemp.Supplier.SupplierID;
        this.orderData.ProjectID = this.orderDataTemp.Project.ProjectID;

        this.orderData.Date = new Date(this.orderDataTemp.Date);
        this.orderData.Notes = this.orderDataTemp.Notes;

        this.orderData.Status = this.orderDataTemp.Status;
        this.orderData.Reference = this.orderDataTemp.Reference;

        this.orderData.Description1 = this.orderDataTemp.Description1;
        this.orderData.Description2 = this.orderDataTemp.Description2;

        this.totalExcludingVatAmount = this.orderDataTemp.TotalExcludingVatAmount;
        this.totalIncludingVatAmount = this.orderDataTemp.TotalIncludingVatAmount;
        this.totalVatAmount          = this.orderDataTemp.TotalVatAmount;

        if(this.orderDataTemp.OrderItems.length > 0)
        {
          this.orderData.OrderItemProjectID = this.orderDataTemp.OrderItems[0].Project.ProjectID;
          if(this.orderDataTemp.OrderItems[0].Supply)
          {
            this.orderData.OrderItemSupplyID = this.orderDataTemp.OrderItems[0].Supply.SupplyId;
          }
          this.orderData.OrderItemQuantity = this.orderDataTemp.OrderItems[0].Quantity;
          this.orderData.OrderItemReference = this.orderDataTemp.OrderItems[0].Reference;

          //this.orderData.OrderItemPrice = this.orderDataTemp.OrderItems[0].Price;
          //this.orderData.OrderItemAllowancePercent = this.orderDataTemp.OrderItems[0].Price;
          this.orderData.OrderItemVatCodeID = this.orderDataTemp.OrderItems[0].VatCode.VatCodeID;
          this.orderData.OrderItemDescription = this.orderDataTemp.OrderItems[0].Description;


        }
        console.log(this.orderDataTemp);

      }, (err) => {
        this.showStaticModal('Error','Some thing is wrong,Please try again');
        this.router.navigate(['pages', 'order']);

      });
    }

  }
}
