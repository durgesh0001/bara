import { TestBed, inject } from '@angular/core/testing';

import { VatCodeService } from './vat-code.service';

describe('VatCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VatCodeService]
    });
  });

  it('should be created', inject([VatCodeService], (service: VatCodeService) => {
    expect(service).toBeTruthy();
  }));
});
