import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubclinicalDetailComponent } from './edit-subclinical-detail.component';

describe('EditSubclinicalDetailComponent', () => {
  let component: EditSubclinicalDetailComponent;
  let fixture: ComponentFixture<EditSubclinicalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubclinicalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubclinicalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
