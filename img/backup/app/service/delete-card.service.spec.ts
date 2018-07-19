import { TestBed, inject } from '@angular/core/testing';

import { DeleteCardService } from './delete-card.service';

describe('DeleteCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteCardService]
    });
  });

  it('should be created', inject([DeleteCardService], (service: DeleteCardService) => {
    expect(service).toBeTruthy();
  }));
});
