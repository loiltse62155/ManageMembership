import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewCardInfoComponent } from './addnew-card-info.component';

describe('AddnewCardInfoComponent', () => {
  let component: AddnewCardInfoComponent;
  let fixture: ComponentFixture<AddnewCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
