import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class HistoryHealthIndexService {

  constructor(private http: HttpClient) { }
  getHistoryHealthCareIndex(idHC: number) {
    return this.http.get<any>("https://cors-anywhere.herokuapp.com/http://202.78.227.3:8005/api/customer/gethistory/"+idHC);
  }
}
