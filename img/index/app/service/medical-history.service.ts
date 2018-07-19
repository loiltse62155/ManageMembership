import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {

  constructor(private http: HttpClient) { }

  getAllMedicalHistory(){
    return this.http.get<any>("http://202.78.227.3:8005/api/MedicalHistory/GetAll")
  }
}
