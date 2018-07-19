import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRehearsalScheduleDetailComponent } from './manage-rehearsal-schedule-detail.component';

describe('ManageRehearsalScheduleDetailComponent', () => {
  let component: ManageRehearsalScheduleDetailComponent;
  let fixture: ComponentFixture<ManageRehearsalScheduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRehearsalScheduleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRehearsalScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
