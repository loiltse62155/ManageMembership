import { Component, OnInit } from '@angular/core';
import {CustomerMedicalHistoryService} from '../../service/customer-medical-history.service';
import {MedicalHistoryValueService} from '../../service/medical-history-value.service';
import {MedicalHistoryService} from '../../service/medical-history.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-manage-vaccine-detail',
  templateUrl: './manage-vaccine-detail.component.html',
  styleUrls: ['./manage-vaccine-detail.component.css'],
  providers: [CustomerMedicalHistoryService,
    MedicalHistoryValueService,
    MedicalHistoryService,
  ]
})
export class ManageVaccineDetailComponent implements OnInit {
  customerMedicalHistory = [];
  medicalHistory = [];
  medicalHistoryValue = [];
  vaccineItem = [];
  check1 : boolean;
  check2: boolean;
  constructor(
    private customerMedicalHistoryService : CustomerMedicalHistoryService,
    private medicalHistoryService : MedicalHistoryService,
    private medicalHistoryValueService: MedicalHistoryValueService,


  ) {  }


  ngOnInit() {
    this.medicalHistoryService.getAllMedicalHistory().subscribe(data => { this.medicalHistory = data; console.log(data); }, (error => this.medicalHistory = null));
    this.customerMedicalHistoryService.getCustomerMedicalHistoryListByMedicalHistoryId(3).subscribe(data => {this.customerMedicalHistory = data; console.log(data);}, (error => this.customerMedicalHistory = null));
 
  }
  
 

}
