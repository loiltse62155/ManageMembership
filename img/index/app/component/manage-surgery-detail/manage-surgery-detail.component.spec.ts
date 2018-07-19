import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSurgeryDetailComponent } from './manage-surgery-detail.component';

describe('ManageSurgeryDetailComponent', () => {
  let component: ManageSurgeryDetailComponent;
  let fixture: ComponentFixture<ManageSurgeryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSurgeryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSurgeryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
