import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulSelectComponent } from './mul-select.component';

describe('MulSelectComponent', () => {
  let component: MulSelectComponent;
  let fixture: ComponentFixture<MulSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
