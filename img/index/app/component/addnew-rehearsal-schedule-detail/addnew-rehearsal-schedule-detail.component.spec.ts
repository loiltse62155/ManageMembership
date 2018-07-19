import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewRehearsalScheduleDetailComponent } from './addnew-rehearsal-schedule-detail.component';

describe('AddnewRehearsalScheduleDetailComponent', () => {
  let component: AddnewRehearsalScheduleDetailComponent;
  let fixture: ComponentFixture<AddnewRehearsalScheduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewRehearsalScheduleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewRehearsalScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
