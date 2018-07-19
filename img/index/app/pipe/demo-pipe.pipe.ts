import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe'
})
export class DemoPipePipe implements PipeTransform {
  rs = [];

  transform(value: any, filter: string, search): any {
    this.rs = [];
    if (filter == null) {
      filter = "";
    }
    for (var i = 0; i < value.length; i++) {
      let get: string = value[i];
      if (get.toLowerCase().toString().includes(filter.toLowerCase())) {
        this.rs.push(get);
      }
    }
    return this.rs;
  }

}
