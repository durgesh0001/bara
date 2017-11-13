import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VatCodeService {

  constructor(private http:Http) {
    console.log('Vat code list service works')
   }

   vatData =[];  
   check:any;
    
   getVatDetails(options) {
     return this.http.get('http://www.baraproject.nl/api/vatcodes', options)
     .map(res => {
       this.check = res;
       if(this.check._body !== "0"){
         return res.json()
     }
   });
 }

}
