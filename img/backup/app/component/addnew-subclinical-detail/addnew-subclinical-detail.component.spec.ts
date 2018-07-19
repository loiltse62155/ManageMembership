import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewSubclinicalDetailComponent } from './addnew-subclinical-detail.component';

describe('AddnewSubclinicalDetailComponent', () => {
  let component: AddnewSubclinicalDetailComponent;
  let fixture: ComponentFixture<AddnewSubclinicalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewSubclinicalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewSubclinicalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
