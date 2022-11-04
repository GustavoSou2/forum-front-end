import { TestBed } from '@angular/core/testing';

import { RoutesValidatorService } from './routes-validator.service';

describe('RoutesValidatorService', () => {
  let service: RoutesValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
