import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DeleteHealthIndexService {

  constructor(private http: HttpClient) { }
  deleteHealthIndex(Id) {
    const body = JSON.stringify({});
    return this.http.post('https://cors-anywhere.herokuapp.com/http://202.78.227.3:8005/api/customer_healthcareindex/delete/'+Id, body, httpOptions);
  }
}
