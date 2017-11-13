import { TestBed, inject } from '@angular/core/testing';

import { EditAccountService } from './bara.service';

describe('EditAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditAccountService]
    });
  });

  it('should be created', inject([EditAccountService], (service: EditAccountService) => {
    expect(service).toBeTruthy();
  }));
});
