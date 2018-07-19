import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyTabComponent } from './allergy-tab.component';

describe('AllergyTabComponent', () => {
  let component: AllergyTabComponent;
  let fixture: ComponentFixture<AllergyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
