import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CustomerMedicalHistoryService} from '../../service/customer-medical-history.service';
import {MedicalHistoryValueService} from '../../service/medical-history-value.service';
import {MedicalHistoryService} from '../../service/medical-history.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-medical-history-disease-type-detail',
  templateUrl: './medical-history-disease-type-detail.component.html',
  styleUrls: ['./medical-history-disease-type-detail.component.css'],
  providers: [CustomerMedicalHistoryService,
    MedicalHistoryValueService,
    MedicalHistoryService,
  ]
})
export class MedicalHistoryDiseaseTypeDetailComponent implements OnInit {
  customerMedicalHistory = [];
  medicalHistory = [];
  medicalHistoryValue = [];

  constructor(
    private customerMedicalHistoryService : CustomerMedicalHistoryService,
    private medicalHistoryService : MedicalHistoryService,
    private medicalHistoryValueService: MedicalHistoryValueService,

  ) { }

  ngOnInit() {
   // this.customerMedicalHistoryService.getCustomerMedicalHistoryList().subscribe(data => { this.customerMedicalHistory = data; console.log(data); }, (error => this.customerMedicalHistory = null));
    this.medicalHistoryService.getAllMedicalHistory().subscribe(data => { this.medicalHistory = data; console.log(data); }, (error => this.medicalHistory = null));
  //this.customerMedicalHistoryService.getCustomerMedicalHistoryList().subscribe(data => { this.customerMedicalHistory = data; console.log(data); }, (error => this.customerMedicalHistory = null));
    this.customerMedicalHistoryService.getCustomerMedicalHistoryListByMedicalHistoryId(2).subscribe(data => {this.customerMedicalHistory = data; console.log(data);}, (error => this.customerMedicalHistory = null));
  }

}
