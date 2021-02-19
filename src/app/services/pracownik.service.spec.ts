import { TestBed } from '@angular/core/testing';

import { PracownikService } from './pracownik.service';

describe('PracownikService', () => {
  let service: PracownikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracownikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
