import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row=>
      {
        if(row.OrderID.indexOf(query) > -1)
        {
          return row
        }
        else if(row.Type.toLowerCase().indexOf(query) > -1 || row.Type.toUpperCase().indexOf(query) > -1 || row.Type.indexOf(query) > -1 )
        {
          return row
        }
        else if(row.Owner.toLowerCase().indexOf(query) > -1 || row.Owner.toUpperCase().indexOf(query) > -1 || row.Owner.indexOf(query) > -1)
        {
          return row;
        }
        else if(row.Date.indexOf(query) > -1)
        {
          return row;
        }
        else if(row.Status.toLowerCase().indexOf(query) > -1 || row.Status.toUpperCase().indexOf(query) > -1 || row.Status.indexOf(query) > -1)
        {
          return row;
        }
        else if(row.TotalExcludingVatAmount.toString().indexOf(query) > -1)
        {
          return row;
        }
      });
    }
    return array;
  }
}
