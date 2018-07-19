import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalMedicationComponent } from './historical-medication.component';

describe('HistoricalMedicationComponent', () => {
  let component: HistoricalMedicationComponent;
  let fixture: ComponentFixture<HistoricalMedicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalMedicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
