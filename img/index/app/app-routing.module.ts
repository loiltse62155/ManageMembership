import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllergyComponent } from './router/allergy/allergy.component';
import { AppointmentComponent } from './router/appointment/appointment.component';
import { RelationshipComponent } from './router/relationship/relationship.component';
import { MedicalHistoryComponent } from './router/medical-history/medical-history.component';
import { HistoricalMedicationComponent } from './router/historical-medication/historical-medication.component';
import { IndexComponent } from './router/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'allergy', component:  AllergyComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'relationship', component:  RelationshipComponent },
  { path: 'medical', component: HistoricalMedicationComponent },
  { path: 'historical', component:  MedicalHistoryComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }