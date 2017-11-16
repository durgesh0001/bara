import { Component } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private router:Router) {
    if(localStorage.getItem('token') != null )
    {
    }
    else
    {
      this.router.navigate(['pages', 'login']);

    }
  }

  }
