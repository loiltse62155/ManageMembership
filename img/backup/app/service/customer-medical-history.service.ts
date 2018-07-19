import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CustomerMedicalHistoryService {



  constructor(private http: HttpClient) { }
  getCustomerMedicalHistoryList(){
    return this.http.get<any>("http://202.78.227.3:8005/api/Customer_MedicalHistory/GetAll");
  }

  getCustomerMedicalHistoryListByMedicalHistoryId(id){
    return this.http.get<any>("http://202.78.227.3:8005/api/Customer_MedicalHistory/GetByMedicalHistoryId/"+ id);
  }

  deleteCustomerMedicalHistoryItemById(Id){
    const body = JSON.stringify({});
    return this.http.post('http://202.78.227.3:8005/api/Customer_MedicalHistory/delete/'+Id, body, httpOptions);
  }
  updateeCustomerMedicalHistoryItemById(Id,StartDate, EndDate, Doctor, Note, Hospital, Value, CustomerId, MedicalHistoryId) {
    const body = JSON.stringify({'Id':Id, 'StartDate': StartDate, 'EndDate': EndDate , 'Doctor' : Doctor, 'Note' : Note,'Hospital' : Hospital,'Value' : Value,'CustomerId' : CustomerId,'MedicalHistoryId' : MedicalHistoryId, });
    return this.http.post('http://202.78.227.3:8005/api/Customer_MedicalHistory/update', body, httpOptions);
  }
}
