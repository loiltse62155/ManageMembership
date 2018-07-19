import { TestBed, inject } from '@angular/core/testing';

import { GetCustomerService } from './get-customer.service';

describe('GetCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCustomerService]
    });
  });

  it('should be created', inject([GetCustomerService], (service: GetCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
