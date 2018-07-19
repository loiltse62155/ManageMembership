import { TestBed, inject } from '@angular/core/testing';

import { MedicalHistoryValueService } from './medical-history-value.service';

describe('MedicalHistoryValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalHistoryValueService]
    });
  });

  it('should be created', inject([MedicalHistoryValueService], (service: MedicalHistoryValueService) => {
    expect(service).toBeTruthy();
  }));
});
