import { TestBed, inject } from '@angular/core/testing';

import { CreateInvoiceService } from './create-invoice.service';

describe('CreateInvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateInvoiceService]
    });
  });

  it('should be created', inject([CreateInvoiceService], (service: CreateInvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
