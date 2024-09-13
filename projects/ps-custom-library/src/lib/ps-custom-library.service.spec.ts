import { TestBed } from '@angular/core/testing';

import { PsCustomLibraryService } from './ps-custom-library.service';

describe('PsCustomLibraryService', () => {
  let service: PsCustomLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsCustomLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
