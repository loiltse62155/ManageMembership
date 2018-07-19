import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllergyComponent } from './edit-allergy.component';

describe('EditAllergyComponent', () => {
  let component: EditAllergyComponent;
  let fixture: ComponentFixture<EditAllergyComponent>;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [ EditAllergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
