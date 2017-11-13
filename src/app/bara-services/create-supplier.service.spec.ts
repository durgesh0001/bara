import { TestBed, inject } from '@angular/core/testing';

import { CreateSupplierService } from './create-supplier.service';

describe('CreateSupplierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateSupplierService]
    });
  });

  it('should be created', inject([CreateSupplierService], (service: CreateSupplierService) => {
    expect(service).toBeTruthy();
  }));
});
