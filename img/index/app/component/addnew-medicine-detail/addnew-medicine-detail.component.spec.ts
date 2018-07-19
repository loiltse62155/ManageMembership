import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewMedicineDetailComponent } from './addnew-medicine-detail.component';

describe('AddnewMedicineDetailComponent', () => {
  let component: AddnewMedicineDetailComponent;
  let fixture: ComponentFixture<AddnewMedicineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewMedicineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewMedicineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
