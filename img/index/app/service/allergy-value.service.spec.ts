import { TestBed, inject } from '@angular/core/testing';

import { AllergyValueService } from './allergy-value.service';

describe('AllergyValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllergyValueService]
    });
  });

  it('should be created', inject([AllergyValueService], (service: AllergyValueService) => {
    expect(service).toBeTruthy();
  }));
});
