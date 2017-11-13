import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SuppliersListService {

   userData =[];  
   check:any;
   constructor(private http: Http) {
     console.log('Suppliers list service works')
   }
 
   getSuppliers(options) {
     return this.http.get('http://www.baraproject.nl/api/Suppliers', options)
     .map(res => {
       this.check = res;
       if(this.check._body !== "0"){
         return res.json()
     }
   });
 }
}

// {
//   "OrderID": "e325d7a6-207d-444d-a792-539228ec60f6",
//   "Customer": {
//       "CustomerID": "90072dab-e23e-4eef-ba21-b07f988877d5",
//       "Name": "Timmer en Onderhoudsbedrijf Riem-Vis & Lindhout",
//       "ParentName": null,
//       "ParentID": null,
//       "Operator": {
//           "OperatorID": "83598110-958c-40d4-beb5-f7f41d9281b8",
//           "Name": "baraproject.nl",
//           "ParentName": null,
//           "ParentID": null,
//           "Status": "Active",
//           "Address": null,
//           "EmailAddress": {
//               "EmailAddressID": "5fb0a7c1-e0ca-4e50-b779-a09a11a77745",
//               "LinkedEntityID": "83598110-958c-40d4-beb5-f7f41d9281b8",
//               "LinkedPropertyName": null,
//               "Status": "Active",
//               "Type": "Work",
//               "Address": "info@baraproject.nl",
//               "IsPrimary": true,
//               "IsConfirmed": false
//           },
//           "TelephoneNumber": null,
//           "CocNumber": null,
//           "VatNumber": null,
//           "Website": null,
//           "Logo": null
//       },
//       "ShortName": "Riem-Vis & Lindhout",
//       "Status": "Active",
//       "Address": {
//           "AddressID": "53c689dd-5229-43e2-98c4-4da38ea62078",
//           "LinkedEntityID": "90072dab-e23e-4eef-ba21-b07f988877d5",
//           "LinkedPropertyName": null,
//           "Status": "Active",
//           "Type": "Work",
//           "FormattedAddress": "Walserij 45\r\n2211 SJ Noordwijkerhout\r\nNetherlands\r\n",
//           "IsPrimary": true
//       },
//       "EmailAddress": {
//           "EmailAddressID": "a3fc1b4f-a3b3-415c-9bb1-8826465c409e",
//           "LinkedEntityID": "90072dab-e23e-4eef-ba21-b07f988877d5",
//           "LinkedPropertyName": null,
//           "Status": "Active",
//           "Type": "Work",
//           "Address": "info@riemvislindhout.nl",
//           "IsPrimary": true,
//           "IsConfirmed": false
//       },
//       "TelephoneNumber": null,
//       "CocNumber": "28111468",
//       "VatNumber": "NL8161.57.169.B01",
//       "Logo": {
//           "FileID": "7c62c823-a06a-4054-b0d7-834b7779efeb",
//           "LinkedEntityID": "90072dab-e23e-4eef-ba21-b07f988877d5",
//           "LinkedPropertyName": "Logo",
//           "FileName": "Logo_2.jpg",
//           "ContentType": "image/jpeg",
//           "BlobUri": "http://www.baraproject.nl/api/files/7c62c823-a06a-4054-b0d7-834b7779efeb/blob"
//       }
//   },
//   "Client": null,
//   "Supplier": {
//       "SupplierID": "8afd3637-7c20-45bf-b39c-72bc67c3ebf9",
//       "Name": "Stucadoorsbedrijf JSG",
//       "ShortName": "JSG",
//       "ParentID": null,
//       "ParentName": null,
//       "Status": "Active",
//       "Customer": {
//           "CustomerID": "90072dab-e23e-4eef-ba21-b07f988877d5",
//           "Name": "Timmer en Onderhoudsbedrijf Riem-Vis & Lindhout",
//           "ParentName": null,
//           "ParentID": null,
//           "Operator": {
//               "OperatorID": "83598110-958c-40d4-beb5-f7f41d9281b8",
//               "Name": "baraproject.nl",
//               "ParentName": null,
//               "ParentID": null,
//               "Status": "Active",
//               "Address": null,
//               "EmailAddress": {
//                   "EmailAddressID": "5fb0a7c1-e0ca-4e50-b779-a09a11a77745",
//                   "LinkedEntityID": "83598110-958c-40d4-beb5-f7f41d9281b8",
//                   "LinkedPropertyName": null,
//                   "Status": "Active",
//                   "Type": "Work",
//                   "Address": "info@baraproject.nl",
//                   "IsPrimary": true,
//                   "IsConfirmed": false
//               },
//               "TelephoneNumber": null,
//               "CocNumber": null,
//               "VatNumber": null,
//               "Website": null,
//               "Logo": null
//           },
//           "ShortName": "Riem-Vis & Lindhout",
//           "Status": "Active",
//           "Address": {
//               "AddressID": "53c689dd-5229-43e2-98c4-4da38ea62078",
//               "LinkedEntityID": "90072dab-e23e-4eef-ba21-b07f988877d5",
//               "LinkedPropertyName": null,
//               "Status": "Active",
//               "Type": "Work",
//               "FormattedAddress": "Walserij 45\r\n2211 SJ Noordwijkerhout\r\nNetherlands\r\n",
//               "IsPrimary": true
//           },
//           "EmailAddress": {
//               "EmailAddressID": "a3fc1b4f-a3b3-415c-9bb1-8826465c409e",
//               "LinkedEntityID": "90072dab-e23e-4eef-ba21-b07f988877d5",
//               "LinkedPropertyName": null,
//               "Status": "Active",
//               "Type": "Work",
//               "Address": "info@riemvislindhout.nl",
//               "IsPrimary": true,
//               "IsConfirmed": false
//           },
//           "TelephoneNumber": null,
//           "CocNumber": "28111468",
//           "VatNumber": "NL8161.57.169.B01",
//           "Logo": {
//               "FileID": "7c62c823-a06a-4054-b0d7-834b7779efeb",
//               "LinkedEntityID": "90072dab-e23e-4eef-ba21-b07f988877d5",
//               "LinkedPropertyName": "Logo",
//               "FileName": "Logo_2.jpg",
//               "ContentType": "image/jpeg",
//               "BlobUri": "http://www.baraproject.nl/api/files/7c62c823-a06a-4054-b0d7-834b7779efeb/blob"
//           }
//       },
//       "Address": {
//           "AddressID": "1a423b48-d8b3-4d22-8974-760e3bd39565",
//           "LinkedEntityID": "8afd3637-7c20-45bf-b39c-72bc67c3ebf9",
//           "LinkedPropertyName": null,
//           "Status": "Active",
//           "Type": "Work",
//           "FormattedAddress": "Bomstraat 20\r\n2202 GH Noordwijk\r\nNetherlands\r\n",
//           "IsPrimary": true
//       },
//       "EmailAddress": {
//           "EmailAddressID": "bc888820-84dd-4bc2-b0ba-63ef118c5ded",
//           "LinkedEntityID": "8afd3637-7c20-45bf-b39c-72bc67c3ebf9",
//           "LinkedPropertyName": null,
//           "Status": "Active",
//           "Type": "Private",
//           "Address": "j.s.g-stucadoors@hotmail.com",
//           "IsPrimary": true,
//           "IsConfirmed": false
//       },
//       "TelephoneNumber": {
//           "TelephoneNumberID": "92d739a7-83a0-45f0-9579-e42c084fce55",
//           "LinkedEntityID": "8afd3637-7c20-45bf-b39c-72bc67c3ebf9",
//           "LinkedPropertyName": null,
//           "Status": "Active",
//           "Type": "General",
//           "FormattedTelephoneNumber": "+31654926842",
//           "IsPrimary": true,
//           "IsConfirmed": false
//       },
//       "CocNumber": "27323802",
//       "VatNumber": "NL2267.93.692.B01",
//       "Reference": null,
//       "Logo": null
//   },
//   "Owner": "Stucadoorsbedrijf JSG",
//   "Project": null,
//   "Quotation": null,
//   "Type": "Purchase",
//   "FullNumber": "17040003.1",
//   "Status": "Quotation",
//   "Description1": null,
//   "Description2": null,
//   "Reference": null,
//   "Date": "2017-04-09T00:00:00",
//   "TotalExcludingVatAmount": 4700,
//   "TotalVatAmount": 0,
//   "TotalIncludingVatAmount": 4700,
//   "FormattedDescription": null
// },