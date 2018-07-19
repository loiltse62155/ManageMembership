import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemHistoryComponent } from './add-item-history.component';

describe('AddItemHistoryComponent', () => {
  let component: AddItemHistoryComponent;
  let fixture: ComponentFixture<AddItemHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
