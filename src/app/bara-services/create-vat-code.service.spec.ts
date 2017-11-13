import { TestBed, inject } from '@angular/core/testing';

import { CreateVatCodeService } from './create-vat-code.service';

describe('CreateVatCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateVatCodeService]
    });
  });

  it('should be created', inject([CreateVatCodeService], (service: CreateVatCodeService) => {
    expect(service).toBeTruthy();
  }));
});
