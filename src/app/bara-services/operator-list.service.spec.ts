import { TestBed, inject } from '@angular/core/testing';

import { OperatorListService } from './operator-list.service';

describe('OperatorListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorListService]
    });
  });

  it('should be created', inject([OperatorListService], (service: OperatorListService) => {
    expect(service).toBeTruthy();
  }));
});
