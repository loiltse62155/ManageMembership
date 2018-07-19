import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMedicineDetailComponent } from './manage-medicine-detail.component';

describe('ManageMedicineDetailComponent', () => {
  let component: ManageMedicineDetailComponent;
  let fixture: ComponentFixture<ManageMedicineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMedicineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMedicineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
