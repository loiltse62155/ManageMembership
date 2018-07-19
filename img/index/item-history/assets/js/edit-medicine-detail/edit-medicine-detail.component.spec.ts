import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicineDetailComponent } from './edit-medicine-detail.component';

describe('EditMedicineDetailComponent', () => {
  let component: EditMedicineDetailComponent;
  let fixture: ComponentFixture<EditMedicineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
