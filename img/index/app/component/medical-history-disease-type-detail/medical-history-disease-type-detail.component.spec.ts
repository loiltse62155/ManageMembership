import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryDiseaseTypeDetailComponent } from './medical-history-disease-type-detail.component';

describe('MedicalHistoryDiseaseTypeDetailComponent', () => {
  let component: MedicalHistoryDiseaseTypeDetailComponent;
  let fixture: ComponentFixture<MedicalHistoryDiseaseTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalHistoryDiseaseTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHistoryDiseaseTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
