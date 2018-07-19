import { TestBed, inject } from '@angular/core/testing';

import { CustomerAllergyService } from './customer-allergy.service';

describe('CustomerAllergyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAllergyService]
    });
  });

  it('should be created', inject([CustomerAllergyService], (service: CustomerAllergyService) => {
    expect(service).toBeTruthy();
  }));
});
