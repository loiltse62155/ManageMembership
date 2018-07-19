import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightWeightComponent } from './height-weight.component';

describe('HeightWeightComponent', () => {
  let component: HeightWeightComponent;
  let fixture: ComponentFixture<HeightWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
