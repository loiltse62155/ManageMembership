import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewTestDetailComponent } from './addnew-test-detail.component';

describe('AddnewTestDetailComponent', () => {
  let component: AddnewTestDetailComponent;
  let fixture: ComponentFixture<AddnewTestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewTestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
