import { Component, OnInit } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateUserService } from '../../bara-services/create-user.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  // headers: any;
  // data: any
  CreateUserForm: FormGroup;
  userData = { LinkedEntityID: '', GivenName: '', IetfLanguageTag:'', Insertion: '', FamilyName: '', EmailAddress: '', CompanyName: '', Password: '', ConfirmedPassword: '', Notes: '' };

  constructor(private _createUserService: CreateUserService, public formBuilder: FormBuilder) {
    // this.headers = new Headers();
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Authorization', 'Basic amFuZUBiYXJhLm5sOndlbGtvbTEyMw==');
    // this.data = new RequestOptions({ headers: this.headers });
    // localStorage.setItem("header", JSON.stringify(this.data));

    this.CreateUserForm = formBuilder.group({
      LinkedEntityID: ['', Validators.compose([])],
      GivenName: ['', Validators.compose([])],
      Insertion: ['', Validators.compose([])],
      FamilyName: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
      EmailAddress: ['', Validators.compose([])],
      IetfLanguageTag: ['', Validators.compose([])],
      CompanyName: ['', Validators.compose([])],
      Password: ['', Validators.compose([])],
      ConfirmedPassword: ['', Validators.compose([])],

    });
  }

  createUser() {
    this._createUserService.userCreate(this.userData).then((userDetail) => {
      console.log("userDetail", userDetail)
    }, (err) => {
      console.log(err);
    });
  }
  ngOnInit() {
  }

}
