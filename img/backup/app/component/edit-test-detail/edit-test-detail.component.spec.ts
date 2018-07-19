import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestDetailComponent } from './edit-test-detail.component';

describe('EditTestDetailComponent', () => {
  let component: EditTestDetailComponent;
  let fixture: ComponentFixture<EditTestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
