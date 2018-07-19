import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewItemHistoryComponent } from './addnew-item-history.component';

describe('AddnewItemHistoryComponent', () => {
  let component: AddnewItemHistoryComponent;
  let fixture: ComponentFixture<AddnewItemHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewItemHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewItemHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
