import { Component, OnInit } from '@angular/core';
import {MedicalHistoryService} from '../../service/medical-history.service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
  ,
  providers:[
    MedicalHistoryService
  ]

})
export class MedicalHistoryComponent implements OnInit {

  medicalHistory = [];
  constructor(
    private medicalHistoryService: MedicalHistoryService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.medicalHistoryService.getAllMedicalHistory().subscribe(data => {this.medicalHistory = data; console.log(data);}, (error=> this.medicalHistory = null));
  }

}
