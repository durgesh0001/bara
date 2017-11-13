import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthAccountService } from '../../bara-services/auth.bara.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../pages/ui-features/modals/modal/modal.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  headers: any;
  data: any;
  options: any;
  loginForm: FormGroup;
  loginData = { email: '', password: ''};
  authToken = "";

  constructor(public formBuilder: FormBuilder,private _authServices:AuthAccountService,private modalService: NgbModal) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([])],
      password: ['', Validators.compose([])]
    });

  }
  login()
  {
    this.authToken = btoa(this.loginData.email+":"+this.loginData.password);
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+this.authToken);
    this.options = new RequestOptions({ headers: this.headers });

    this._authServices.login(this.options).then((AuthDetails) => {
      //this.showStaticModal('Success','Successfully Logged In');
      localStorage.setItem("token", this.authToken);


    }, (err) => {
      //this.showStaticModal('Error','Invalid User Name or Password');
      localStorage.setItem("token", "");
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

  }


}
