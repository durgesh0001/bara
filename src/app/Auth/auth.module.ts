import { NgModule } from '@angular/core';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./Login/login.component";
import { ThemeModule } from '../@theme/theme.module';
import { ModalComponent } from '../pages/ui-features/modals/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../@core/core.module';




const AUTH_COMPONENTS = [
  AuthComponent
];

@NgModule({
  imports: [
    AuthRoutingModule,
    ThemeModule
  ],
  declarations: [
    ...AUTH_COMPONENTS,
    ModalComponent,
    LoginComponent,
  ],
  entryComponents: [
    ModalComponent
  ],
})
export class AuthModule {
}
