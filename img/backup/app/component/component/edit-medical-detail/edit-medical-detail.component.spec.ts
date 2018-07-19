import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicalDetailComponent } from './edit-medical-detail.component';

describe('EditMedicalDetailComponent', () => {
  let component: EditMedicalDetailComponent;
  let fixture: ComponentFixture<EditMedicalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
