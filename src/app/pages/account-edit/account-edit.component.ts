import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { EditAccountService } from '../../bara-services/bara.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {
  getData: string;
  postData: string;
  UpdateForm: FormGroup;
  userData = { LinkedEntityID: '', GivenName: '', IetfLanguageTag:'',Insertion: '', FamilyName: '', EmailAddress: '', Password: '', ConfirmedPassword: '', Notes: '' };

  constructor(private _editAccountService: EditAccountService, public formBuilder: FormBuilder) {
    //console.log('account-edit works');
    this.UpdateForm = formBuilder.group({
      LinkedEntityID: ['', Validators.compose([])],
      GivenName: ['', Validators.compose([])],
      Insertion: ['', Validators.compose([])],
      FamilyName: ['', Validators.compose([])],
      Notes: ['', Validators.compose([])],
      EmailAddress: ['', Validators.compose([])],
      IetfLanguageTag: ['', Validators.compose([])],
      Password: ['', Validators.compose([])],
      ConfirmedPassword: ['', Validators.compose([])],
    });
  }  

  updateUser() {
    this._editAccountService.userDetailupdate(this.userData).then((userDetail) => {
      console.log("userDetail", userDetail)
    }, (err) => {
      console.log(err);
    });
  }

  // Test API start 
  //loadUserData() {
  //   this._editAccountService.gerCurrentTime().subscribe(
  //     data => this.getData = JSON.stringify(data),
  //     error => alert(error),
  //     () => console.log('finished data')
  //   )
  // }

  // submitUserData() {
  //   this._editAccountService.postJSON().subscribe(
  //     data => this.postData = JSON.stringify(data),
  //     error => alert(error),
  //     () => console.log('sended data')
  //   )
  // }
  // Test API end

  // constructor(private editAccount:EditAccountService) {
  //   // this.editAccount.getAcountDetails().subscribe((userData) =>{
  //   //   console.log(userData);
  //   //    this.userDetails = userData;
  //   // });
  //    }



  ngOnInit() {

  }

}
