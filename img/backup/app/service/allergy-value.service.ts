import { Injectable } from '@angular/core';
import {AllergyValue} from '../model/allergy-value.model';
//import {Http, Response, Headers, RequestOptions, RequestMethod, HttpModule} from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AllergyValueService {

  selectedAllergyValue: AllergyValue;
  AllergyValueList: AllergyValue[];
  rs: any;
  
  constructor( private http: HttpClient) { }

  getAllergyValueList(){
        return this.http.get<any>("http://202.78.227.3:8005/api/AllergyValue/GetAll");
    
  }

  
 
}
