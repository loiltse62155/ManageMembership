import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTestDetailComponent } from './manage-test-detail.component';

describe('ManageTestDetailComponent', () => {
  let component: ManageTestDetailComponent;
  let fixture: ComponentFixture<ManageTestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
