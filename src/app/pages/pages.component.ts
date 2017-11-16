import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
  constructor(private router:Router)
  {
    if(localStorage.getItem('token') != null )
    {
      this.router.navigate(['pages', 'dashboard']);
    }
    else
    {
      this.router.navigate(['pages', 'login']);

    }
  }
}
