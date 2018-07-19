import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeadNavComponent } from './component/head-nav/head-nav.component';
import { ClientInfoComponent } from './component/client-info/client-info.component';
import { HeightWeightComponent } from './component/height-weight/height-weight.component';
import { BasicIndexComponent } from './component/basic-index/basic-index.component';
import { ItemHistoryComponent } from './component/item-history/item-history.component';
import { ShowGraphComponent } from './component/show-graph/show-graph.component';
import { EditItemHistoryComponent } from './component/edit-item-history/edit-item-history.component';
import { AddnewItemHistoryComponent } from './component/addnew-item-history/addnew-item-history.component';
import { AddnewMedicineDetailComponent } from './component/addnew-medicine-detail/addnew-medicine-detail.component';
import { AddnewSubclinicalDetailComponent } from './component/addnew-subclinical-detail/addnew-subclinical-detail.component';
import { AddnewTestDetailComponent } from './component/addnew-test-detail/addnew-test-detail.component';

import { EditSubclinicalDetailComponent } from './component/edit-subclinical-detail/edit-subclinical-detail.component';
import { EditTestDetailComponent } from './component/edit-test-detail/edit-test-detail.component';

import { ManageMedicineDetailComponent } from './component/manage-medicine-detail/manage-medicine-detail.component';
import { ManagePersonalInformationDetailComponent } from './component/manage-personal-information-detail/manage-personal-information-detail.component';
import { ManageTestDetailComponent } from './component/manage-test-detail/manage-test-detail.component';
import { ManageSubclinicalDetailComponent } from './component/manage-subclinical-detail/manage-subclinical-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './router/index/index.component';
import { HeadComponent } from './component/head/head.component';
import { AllergyComponent } from './router/allergy/allergy.component';
import { AppointmentComponent } from './router/appointment/appointment.component';
import { RelationshipComponent } from './router/relationship/relationship.component';
import { MedicalHistoryComponent } from './router/medical-history/medical-history.component';
import { HistoricalMedicationComponent } from './router/historical-medication/historical-medication.component';
import { AddItemHistoryComponent } from './component/add-item-history/add-item-history.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditAllergyComponent } from './component/edit-allergy/edit-allergy.component';
// import '../bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicalHistoryDiseaseTypeDetailComponent } from './component/medical-history-disease-type-detail/medical-history-disease-type-detail.component';
import { OtherDetailComponent } from './component/other-detail/other-detail.component';
import { ManageRehearsalScheduleDetailComponent } from './component/manage-rehearsal-schedule-detail/manage-rehearsal-schedule-detail.component';
import { EditRehearsalScheduleDetailComponent } from './component/edit-rehearsal-schedule-detail/edit-rehearsal-schedule-detail.component';
import { AddnewRehearsalScheduleDetailComponent } from './component/addnew-rehearsal-schedule-detail/addnew-rehearsal-schedule-detail.component';
import { ManageSurgeryDetailComponent } from './component/manage-surgery-detail/manage-surgery-detail.component';
import { ManageVaccineDetailComponent } from './component/manage-vaccine-detail/manage-vaccine-detail.component';
import { ManageCardDetailComponent } from './component/manage-card-detail/manage-card-detail.component';


import { TestUploadFileComponent } from './component/test-upload-file/test-upload-file.component';
import { DemoPipePipe } from './pipe/demo-pipe.pipe';
import { MulSelectComponent } from './component/mul-select/mul-select.component';
import { GetColorCardTypePipe } from './pipe/get-color-card-type.pipe';
import {GetAllergyNotExistPipe} from './pipe/get-allergy-not-exist.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadNavComponent,
    ClientInfoComponent,
    HeightWeightComponent,
    BasicIndexComponent,
    ItemHistoryComponent,
    ShowGraphComponent,
    EditItemHistoryComponent,
    AddnewMedicineDetailComponent,
    AddnewSubclinicalDetailComponent,
    AddnewTestDetailComponent,
    
    EditSubclinicalDetailComponent,
    EditTestDetailComponent,
    
    ManageMedicineDetailComponent,
    ManagePersonalInformationDetailComponent,
    ManageTestDetailComponent,
    ManageSubclinicalDetailComponent,
    IndexComponent,
    HeadComponent,
    AllergyComponent,
    AppointmentComponent,
    RelationshipComponent,
    MedicalHistoryComponent,
    HistoricalMedicationComponent,
    AddItemHistoryComponent,
    EditAllergyComponent,
    MedicalHistoryDiseaseTypeDetailComponent,
    OtherDetailComponent,
    ManageRehearsalScheduleDetailComponent,
    EditRehearsalScheduleDetailComponent,
    AddnewRehearsalScheduleDetailComponent,
    ManageSurgeryDetailComponent,
    ManageVaccineDetailComponent,
    TestUploadFileComponent,

    ManageCardDetailComponent,

    DemoPipePipe,

    MulSelectComponent,

    GetColorCardTypePipe,
    GetAllergyNotExistPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
