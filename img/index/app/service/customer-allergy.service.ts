import { Injectable } from '@angular/core';
import {CustomerAllergy} from '../model/customer-allergy.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CustomerAllergyService {
  rs: any;
  selectedCustomerAllergy: CustomerAllergy;
  constructor(private http: HttpClient) { }

  getCustomerAllergyList(){
    return this.http.get<any>("http://202.78.227.3:8005/api/Customer_Allergy/GetAll");
 
  }
  getCustomerAllergyListByCustomerId(customerId: number){
    return this.http.get<any>("http://202.78.227.3:8005/api/Customer_Allergy/GetByCustomerId/" + customerId);
 
  }
  createCustomerAllergy(Value, CustomerId, AllergyId) {
   
    const body = JSON.stringify({'Value': Value, 'CustomerId': CustomerId , 'AllergyId' : AllergyId });
    return this.http.post('http://202.78.227.3:8005/api/customer_allergy/create', body, httpOptions);
  }
  deleteCustomerAllergyById(Id) {
    const body = JSON.stringify({});
    return this.http.post('http://202.78.227.3:8005/api/customer_allergy/delete/'+Id, body, httpOptions);
  }
  updateAllergyById(Id,Value, CustomerId, AllergyId) {
    const body = JSON.stringify({'Id':Id, 'Value': Value, 'CustomerId': CustomerId , 'AllergyId' : AllergyId });
    return this.http.post('http://202.78.227.3:8005/api/customer_allergy/update', body, httpOptions);
  }
}
