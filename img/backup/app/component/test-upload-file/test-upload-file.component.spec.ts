import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUploadFileComponent } from './test-upload-file.component';

describe('TestUploadFileComponent', () => {
  let component: TestUploadFileComponent;
  let fixture: ComponentFixture<TestUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
