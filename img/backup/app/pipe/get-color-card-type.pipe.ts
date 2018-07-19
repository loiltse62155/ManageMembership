import { Pipe, PipeTransform } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
  name: 'getColorCardType'
})
export class GetColorCardTypePipe implements PipeTransform {
  TypeCardData = [
    { Type: "cấp cứu", Color: "#D32F2F" },
    { Type: "ngoại trú", Color: "#FFEB3B" },
    { Type: "nội trú", Color: "#4CAF50" },
    { Type: "", Color: "black" }];
  transform(type: any): any {
    for (var i = 0; i < this.TypeCardData.length -1; i++) {
      if (type == this.TypeCardData[i].Type)
        return this.TypeCardData[i].Color;
    }
    return this.TypeCardData[this.TypeCardData.length - 1].Color;
  }

}
