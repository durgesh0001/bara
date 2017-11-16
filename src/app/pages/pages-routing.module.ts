import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { UsersComponent } from './users/users.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { OperatorsComponent } from './operators/operators.component';
import { CreateOperatorComponent } from './create-operator/create-operator.component';
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
import {LoginComponent} from "./login/login.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
    {
    path: 'account-edit',
    component: AccountEditComponent,
  },
    {
    path: 'users',
    component: UsersComponent,
  }, {
    path: 'create-user',
    component: CreateUserComponent,
  },  {
    path: 'operators',
    component: OperatorsComponent,
  },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
    path: 'create-operators',
    component: CreateOperatorComponent,
  }, {
    path: 'units',
    component: UnitsComponent,
  }, {
    path: 'create-unit',
    component: CreateUnitComponent,
  }, {
    path: 'vat-codes',
    component: VatCodesComponent,
  }, {
    path: 'create-vat',
    component: CreateVatComponent,
  }, {
    path: 'customers',
    component: CustomersComponent,
  }, {
    path: 'create-customer',
    component: CreateCustomerComponent,
  }, {
    path: 'projects',
    component: ProjectsComponent,
  }, {
    path: 'create-project',
    component: CreateProjectComponent,
  }, {
    path: 'clients',
    component: ClientsComponent,
  }, {
    path: 'create-client',
    component: CreateClientComponent,
  }, {
    path: 'categories',
    component: CategoriesComponent,
  }, {
    path: 'create-categories',
    component: CreateCategoriesComponent,
  }, {
    path: 'suppliers',
    component: SuppliersComponent,
  },
    {
    path: 'create-supplier',
    component: CreateSupplierComponent,
  }, {
    path: 'supplies',
    component: SuppliesComponent,
  }, {
    path: 'create-supplies',
    component: CreateSuppliesComponent,
  }, {
    path: 'products',
    component: ProductsComponent,
  }, {
    path: 'create-product',
    component: CreateProductComponent,
  }, {
    path: 'order',
    component: OrderComponent,
  }, {
    path: 'create-order',
    component: CreateOrderComponent,
  },
    {
      path: 'update-order/:orderId',
      component: CreateOrderComponent,
    },
    {
    path: 'invoices',
    component: InvoicesComponent,
  }, {
    path: 'create-invoice',
    component: CreateInvoiceComponent,
  },
    {
    path: 'test-component',
    component: TestComponentComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  },
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
