import { TestBed, inject } from '@angular/core/testing';

import { SuppliesListsService } from './supplies-lists.service';

describe('SuppliesListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuppliesListsService]
    });
  });

  it('should be created', inject([SuppliesListsService], (service: SuppliesListsService) => {
    expect(service).toBeTruthy();
  }));
});
