import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetAllCardService {

  constructor(private httpGet: HttpClient) { }
   GetAllCardData(IdCustomer:number) {
    return this.httpGet.get<any>("http://202.78.227.3:8005/api/customer/getmedical/"+IdCustomer);
  }
}
