import { TestBed, inject } from '@angular/core/testing';

import { GetHealthCareService } from './get-health-care.service';

describe('GetHealthCareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHealthCareService]
    });
  });

  it('should be created', inject([GetHealthCareService], (service: GetHealthCareService) => {
    expect(service).toBeTruthy();
  }));
});
