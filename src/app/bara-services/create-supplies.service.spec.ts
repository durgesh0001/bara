import { TestBed, inject } from '@angular/core/testing';

import { CreateSuppliesService } from './create-supplies.service';

describe('CreateSuppliesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateSuppliesService]
    });
  });

  it('should be created', inject([CreateSuppliesService], (service: CreateSuppliesService) => {
    expect(service).toBeTruthy();
  }));
});
