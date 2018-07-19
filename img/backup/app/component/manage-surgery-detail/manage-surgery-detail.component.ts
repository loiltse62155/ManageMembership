import { Component, OnInit, Input } from '@angular/core';
import {CustomerMedicalHistoryService} from '../../service/customer-medical-history.service';
import {MedicalHistoryValueService} from '../../service/medical-history-value.service';
import {MedicalHistoryService} from '../../service/medical-history.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-manage-surgery-detail',
  templateUrl: './manage-surgery-detail.component.html',
  styleUrls: ['./manage-surgery-detail.component.css'],
  providers: [CustomerMedicalHistoryService,
    MedicalHistoryValueService,
    MedicalHistoryService,
  ]
})
export class ManageSurgeryDetailComponent implements OnInit {
  customerMedicalHistory = [];
  medicalHistory = [];
  medicalHistoryValue = [];
  surgeryItem = [];
  
  editIcon : boolean;
  checkIcon : boolean;
  @Input() update;
  @Input() check;
  constructor(
    private customerMedicalHistoryService : CustomerMedicalHistoryService,
    private medicalHistoryService : MedicalHistoryService,
    private medicalHistoryValueService: MedicalHistoryValueService,

  ) { this.checkIcon = false; this.editIcon = true; }

  ngOnInit() {
    this.medicalHistoryService.getAllMedicalHistory().subscribe(data => { this.medicalHistory = data; console.log(data); }, (error => this.medicalHistory = null));
    this.customerMedicalHistoryService.getCustomerMedicalHistoryListByMedicalHistoryId(3).subscribe(data => {this.customerMedicalHistory = data; console.log(data);}, (error => this.customerMedicalHistory = null));
 
  }

  showHideIcon(){
    if(this.update == true && this.check == false){
      this.update = true;
      this.check = false;
    }if(this.update != true && this.check != false){
      this.update = false;
      this.check = true;
    }
  }

  showHideIcon2(){
    if(this.checkIcon == true){
      this.editIcon = false;
    }else{
      this.editIcon = true;
    }
  }



}
