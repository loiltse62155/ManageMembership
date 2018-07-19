import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCardInfoComponent } from './filter-card-info.component';

describe('FilterCardInfoComponent', () => {
  let component: FilterCardInfoComponent;
  let fixture: ComponentFixture<FilterCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
