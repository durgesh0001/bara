import { TestBed, inject } from '@angular/core/testing';

import { SuppliersListService } from './suppliers-list.service';

describe('SuppliersListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuppliersListService]
    });
  });

  it('should be created', inject([SuppliersListService], (service: SuppliersListService) => {
    expect(service).toBeTruthy();
  }));
});
