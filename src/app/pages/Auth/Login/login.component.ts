import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../ui-features/modals/modal/modal.component';

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

  constructor(public formBuilder: FormBuilder,private modalService: NgbModal) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    this.options = new RequestOptions({ headers: this.headers });
    this.data = new RequestOptions({ headers: this.headers });
    localStorage.setItem("header", JSON.stringify(this.data));
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([])],
      password: ['', Validators.compose([])]
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
