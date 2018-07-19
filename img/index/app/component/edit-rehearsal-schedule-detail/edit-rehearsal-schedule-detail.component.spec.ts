import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRehearsalScheduleDetailComponent } from './edit-rehearsal-schedule-detail.component';

describe('EditRehearsalScheduleDetailComponent', () => {
  let component: EditRehearsalScheduleDetailComponent;
  let fixture: ComponentFixture<EditRehearsalScheduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRehearsalScheduleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRehearsalScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
