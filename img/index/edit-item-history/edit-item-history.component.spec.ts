import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemHistoryComponent } from './edit-item-history.component';

describe('EditItemHistoryComponent', () => {
  let component: EditItemHistoryComponent;
  let fixture: ComponentFixture<EditItemHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
