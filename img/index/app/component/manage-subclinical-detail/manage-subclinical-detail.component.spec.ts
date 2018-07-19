import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubclinicalDetailComponent } from './manage-subclinical-detail.component';

describe('ManageSubclinicalDetailComponent', () => {
  let component: ManageSubclinicalDetailComponent;
  let fixture: ComponentFixture<ManageSubclinicalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubclinicalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubclinicalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
