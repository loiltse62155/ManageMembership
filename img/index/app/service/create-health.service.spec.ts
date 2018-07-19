import { TestBed, inject } from '@angular/core/testing';

import { CreateHealthService } from './create-health.service';

describe('CreateHealthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateHealthService]
    });
  });

  it('should be created', inject([CreateHealthService], (service: CreateHealthService) => {
    expect(service).toBeTruthy();
  }));
});
