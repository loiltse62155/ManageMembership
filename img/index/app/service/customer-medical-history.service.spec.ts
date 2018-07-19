import { TestBed, inject } from '@angular/core/testing';

import { CustomerMedicalHistoryService } from './customer-medical-history.service';

describe('CustomerMedicalHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerMedicalHistoryService]
    });
  });

  it('should be created', inject([CustomerMedicalHistoryService], (service: CustomerMedicalHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
