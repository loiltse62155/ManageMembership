import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UpdateHealthIndexService {

  constructor(private http: HttpClient) { }
    updateHealthIndex(Id,CustomerId, HealthCareIndexId, Value, Date) {
    const body = JSON.stringify({ 'CustomerId': CustomerId, 'HealthCareIndexId': HealthCareIndexId, 'Value': Value, 'Date': Date ,'Id' :Id });
    return this.http.post('https://cors-anywhere.herokuapp.com/http://202.78.227.3:8005/api/customer_healthcareindex/update', body, httpOptions);
  }
}
