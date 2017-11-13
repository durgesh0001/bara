import { TestBed, inject } from '@angular/core/testing';

import { CategoriesListService } from './categories-list.service';

describe('CategoriesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesListService]
    });
  });

  it('should be created', inject([CategoriesListService], (service: CategoriesListService) => {
    expect(service).toBeTruthy();
  }));
});
