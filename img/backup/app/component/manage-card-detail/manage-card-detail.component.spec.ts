import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardDetailComponent } from './manage-card-detail.component';

describe('ManageCardDetailComponent', () => {
  let component: ManageCardDetailComponent;
  let fixture: ComponentFixture<ManageCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
