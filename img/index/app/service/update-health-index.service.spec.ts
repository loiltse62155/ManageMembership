import { TestBed, inject } from '@angular/core/testing';

import { UpdateHealthIndexService } from './update-health-index.service';

describe('UpdateHealthIndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateHealthIndexService]
    });
  });

  it('should be created', inject([UpdateHealthIndexService], (service: UpdateHealthIndexService) => {
    expect(service).toBeTruthy();
  }));
});
