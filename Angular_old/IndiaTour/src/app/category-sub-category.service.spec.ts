import { TestBed } from '@angular/core/testing';

import { CategorySubCategoryService } from './category-sub-category.service';

describe('CategorySubCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorySubCategoryService = TestBed.get(CategorySubCategoryService);
    expect(service).toBeTruthy();
  });
});
