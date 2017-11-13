import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DataTableModule} from "angular2-datatable";

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { OperatorsComponent } from './operators/operators.component';
import { CreateOperatorComponent } from './create-operator/create-operator.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { UnitsComponent } from './units/units.component';
import { CreateUnitComponent } from './create-unit/create-unit.component';
import { VatCodesComponent } from './vat-codes/vat-codes.component';
import { CreateVatComponent } from './create-vat/create-vat.component';
import { CustomersComponent } from './customers/customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ClientsComponent } from './clients/clients.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { CreateSuppliesComponent } from './create-supplies/create-supplies.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ModalComponent } from './ui-features/modals/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Auth/Login/login.component';






const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    Ng2SmartTableModule,
    DataTableModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ModalComponent,
    AccountEditComponent,
    UsersComponent,
    CreateUserComponent,
    OperatorsComponent,
    CreateOperatorComponent,
    TestComponentComponent,
    UnitsComponent,
    CreateUnitComponent,
    VatCodesComponent,
    CreateVatComponent,
    CustomersComponent,
    CreateCustomerComponent,
    ProjectsComponent,
    CreateProjectComponent,
    ClientsComponent,
    CreateClientComponent,
    CategoriesComponent,
    CreateCategoriesComponent,
    SuppliersComponent,
    CreateSupplierComponent,
    SuppliesComponent,
    CreateSuppliesComponent,
    ProductsComponent,
    CreateProductComponent,
    OrderComponent,
    CreateOrderComponent,
    InvoicesComponent,
    CreateInvoiceComponent,
    LoginComponent
  ],
  entryComponents: [
    ModalComponent
  ],
})
export class PagesModule {
}
