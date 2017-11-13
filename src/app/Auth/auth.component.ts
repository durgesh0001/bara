import { Component } from '@angular/core';
import { AuthAccountService } from '../bara-services/auth.bara.service';
import {Router} from '@angular/router';


@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AuthComponent {

 constructor(private _authServices:AuthAccountService,private router:Router)
 {
   if(localStorage.getItem('token') != null )
   {
     alert("logged in");
   }
   else
   {
     alert("logged out");

   }
 }

}
