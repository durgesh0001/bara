import { TestBed, inject } from '@angular/core/testing';

import { CreateUnitService } from './create-unit.service';

describe('CreateUnitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateUnitService]
    });
  });

  it('should be created', inject([CreateUnitService], (service: CreateUnitService) => {
    expect(service).toBeTruthy();
  }));
});
