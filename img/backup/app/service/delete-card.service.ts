import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DeleteCardService {

  constructor(private httpDelete: HttpClient) {
  }
  DeleteCard(IdCard: number) {
    return this.httpDelete.post<any>("http://202.78.227.3:8005/api/medicalrecord/delete/" + IdCard, "", httpOptions);
  }
}
