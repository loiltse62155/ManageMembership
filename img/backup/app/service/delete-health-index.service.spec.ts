import { TestBed, inject } from '@angular/core/testing';

import { DeleteHealthIndexService } from './delete-health-index.service';

describe('DeleteHealthIndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteHealthIndexService]
    });
  });

  it('should be created', inject([DeleteHealthIndexService], (service: DeleteHealthIndexService) => {
    expect(service).toBeTruthy();
  }));
});
