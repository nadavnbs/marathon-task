import { TestBed, inject } from '@angular/core/testing';

import { MarathonsService } from './marathons.service';

describe('MarathonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarathonsService]
    });
  });

  it('should be created', inject([MarathonsService], (service: MarathonsService) => {
    expect(service).toBeTruthy();
  }));
});
