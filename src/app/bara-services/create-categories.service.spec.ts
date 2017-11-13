import { TestBed, inject } from '@angular/core/testing';

import { CreateCategoriesService } from './create-categories.service';

describe('CreateCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCategoriesService]
    });
  });

  it('should be created', inject([CreateCategoriesService], (service: CreateCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
