import { TestBed, inject } from '@angular/core/testing';

import { GetAllCardService } from './get-all-card.service';

describe('GetAllCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllCardService]
    });
  });

  it('should be created', inject([GetAllCardService], (service: GetAllCardService) => {
    expect(service).toBeTruthy();
  }));
});
