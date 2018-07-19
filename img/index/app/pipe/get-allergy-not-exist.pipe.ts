import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAllergyNotExist'
})
export class GetAllergyNotExistPipe implements PipeTransform {
  rs = [];
  transform(SetParent: any, SetJoin: any): any {
    for (var i = 0; i < SetParent.length; i++) {
      let exist = false;
      for (var j = 0; j < SetJoin.length; j++) {
        if (SetParent[i].Id == SetJoin[j].AllergyId) {
          exist = true;
          break;
        }
      }
      if (!exist) {
        this.rs.push(SetParent[i]);
      }
    }
    return this.rs;

  }

}
