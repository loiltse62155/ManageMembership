import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVaccineDetailComponent } from './manage-vaccine-detail.component';

describe('ManageVaccineDetailComponent', () => {
  let component: ManageVaccineDetailComponent;
  let fixture: ComponentFixture<ManageVaccineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVaccineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVaccineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
