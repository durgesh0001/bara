import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataTableModule } from "angular2-datatable";

import { AuthAccountService } from '../../bara-services/auth.bara.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../ui-features/modals/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  orderDetails: any;
  headers: any;
  options: any;
  authToken:any;
  loginData = { email: '', password: ''};
  loginForm: FormGroup;

  constructor(private router:Router,public formBuilder: FormBuilder,private _authServices:AuthAccountService,private modalService: NgbModal) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+localStorage.getItem('token'));
    this.options = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.options));
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([])],
      password: ['', Validators.compose([])]
    });
    if(localStorage.getItem('token') != null )
    {
      this.router.navigate(['pages', 'dashboard']);
    }
    else
    {

    }

  }

  ngOnInit(): void {

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

  login()
  {
    this.authToken = btoa(this.loginData.email+":"+this.loginData.password);
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic '+this.authToken);
    this.options = new RequestOptions({ headers: this.headers });

    this._authServices.login(this.options).then((AuthDetails) => {
      this.showStaticModal('Success','Successfully Logged In');
      localStorage.setItem("token", this.authToken);
      this.router.navigate(['pages', 'dashboard']);
      location.reload();


    }, (err) => {
      this.showStaticModal('Error','Invalid email or password');
      localStorage.clear();
    });

  }

}
