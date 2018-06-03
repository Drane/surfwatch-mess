import { TestBed, inject } from '@angular/core/testing';

import { SurfwatchService } from './surfwatch.service';

describe('SurfwatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurfwatchService]
    });
  });

  it('should be created', inject([SurfwatchService], (service: SurfwatchService) => {
    expect(service).toBeTruthy();
  }));
});
