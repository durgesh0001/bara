/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './@core/core.module';
import {DataTableModule} from "angular2-datatable";
import { NgDatepickerModule } from 'ng2-datepicker';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { EditAccountService } from './bara-services/bara.service';
import { UsersListService } from './bara-services/users-list.service';
import { CreateUserService } from './bara-services/create-user.service';
import { OperatorListService } from './bara-services/operator-list.service';
import { CreateOperatorService } from './bara-services/create-operator.service';
import { UnitsListingService } from './bara-services/units-listing.service';
import { CreateUnitService } from './bara-services/create-unit.service';
import { VatCodeService } from './bara-services/vat-code.service';
import { CreateVatCodeService } from './bara-services/create-vat-code.service';
import { CustomersService } from './bara-services/customers.service';
import { CreateCustomerService } from './bara-services/create-customer.service';
import { ProjectsListService } from './bara-services/projects-list.service';
import { CreateProjectService } from './bara-services/create-project.service';
import { ClientListService } from './bara-services/client-list.service';
import { CreateClientService } from './bara-services/create-client.service';
import { CategoriesListService } from './bara-services/categories-list.service';
import { CreateCategoriesService } from './bara-services/create-categories.service';
import { SuppliersListService } from './bara-services/suppliers-list.service';
import { CreateSupplierService } from './bara-services/create-supplier.service';
import { SuppliesListsService } from './bara-services/supplies-lists.service';
import { CreateSuppliesService } from './bara-services/create-supplies.service';
import { ProductListService } from './bara-services/product-list.service';
import { CreateProductService } from './bara-services/create-product.service';
import { OrderListService } from './bara-services/order-list.service';
import { CreateOrderService } from './bara-services/create-order.service';
import { InvoiceListService } from './bara-services/invoice-list.service';
import { CreateInvoiceService } from './bara-services/create-invoice.service';
import { AuthAccountService } from './bara-services/auth.bara.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ThemeModule,
    DataTableModule,
    Ng2SmartTableModule,
    NgDatepickerModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    EditAccountService,
    UsersListService,
    CreateUserService,
    OperatorListService,
    CreateOperatorService,
    UnitsListingService,
    CreateUnitService,
    CreateVatCodeService,
    VatCodeService,
    CustomersService,
    CreateCustomerService,
    ProjectsListService,
    CreateProjectService,
    ClientListService,
    CreateClientService,
    CategoriesListService,
    CreateCategoriesService,
    SuppliersListService,
    CreateSupplierService,
    SuppliesListsService,
    CreateSuppliesService,
    ProductListService,
    CreateProductService,
    OrderListService,
    CreateOrderService,
    InvoiceListService,
    CreateInvoiceService,
    AuthAccountService
  ],
})
export class AppModule {
}
