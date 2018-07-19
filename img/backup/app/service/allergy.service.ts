import { Injectable } from '@angular/core';
import {Allergy} from '../model/allergy.model'
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AllergyService {
  rs:any;allergyId: number;
  selectedAllergy: Allergy;
  constructor( private http: HttpClient) { 
    
  }
  getAllergyList(){
    return this.http.get<any>("http://202.78.227.3:8005/api/Allergy/GetAll");
  }

  deleteAllergyType(Id){
    const body = JSON.stringify({});
    return this.http.post("http://202.78.227.3:8005/api/allergy/delete/"+Id, body, httpOptions);
  }

}
