import { TestBed } from '@angular/core/testing';

import { DeclarativeDataAccessService } from './declarative-data-access.service';

describe('DeclarativeDataAccessService', () => {
  let service: DeclarativeDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarativeDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
