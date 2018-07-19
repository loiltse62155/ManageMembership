import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePersonalInformationDetailComponent } from './manage-personal-information-detail.component';

describe('ManagePersonalInformationDetailComponent', () => {
  let component: ManagePersonalInformationDetailComponent;
  let fixture: ComponentFixture<ManagePersonalInformationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePersonalInformationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePersonalInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
