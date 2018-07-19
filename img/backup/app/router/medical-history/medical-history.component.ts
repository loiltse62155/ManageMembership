import { Component, OnInit } from '@angular/core';
import {MedicalHistoryService} from '../../service/medical-history.service';
import {ToastrService} from 'ngx-toastr';
import {CustomerMedicalHistoryService} from '../../service/customer-medical-history.service'
import {MedicalHistoryDiseaseTypeDetailComponent} from '../../component/medical-history-disease-type-detail/medical-history-disease-type-detail.component'
@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
  ,
  providers:[
    MedicalHistoryService, CustomerMedicalHistoryService
  ]

})
export class MedicalHistoryComponent implements OnInit {

  medicalHistory = [];
  customerMedicalHistory = [];
  constructor(
    private customerMedicalHistoryService : CustomerMedicalHistoryService,
    private medicalHistoryService: MedicalHistoryService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.medicalHistoryService.getAllMedicalHistory().subscribe(data => {this.medicalHistory = data; console.log(data);}, (error=> this.medicalHistory = null));
    this.customerMedicalHistoryService.getCustomerMedicalHistoryList().subscribe(data => { this.customerMedicalHistory = data; console.log(data); }, (error => this.customerMedicalHistory = null));
 
  }

}
