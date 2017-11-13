import { TestBed, inject } from '@angular/core/testing';

import { UnitsListingService } from './units-listing.service';

describe('UnitsListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitsListingService]
    });
  });

  it('should be created', inject([UnitsListingService], (service: UnitsListingService) => {
    expect(service).toBeTruthy();
  }));
});
