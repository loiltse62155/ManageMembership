import { TestBed, inject } from '@angular/core/testing';

import { HistoryHealthIndexService } from './history-health-index.service';

describe('HistoryHealthIndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryHealthIndexService]
    });
  });

  it('should be created', inject([HistoryHealthIndexService], (service: HistoryHealthIndexService) => {
    expect(service).toBeTruthy();
  }));
});
