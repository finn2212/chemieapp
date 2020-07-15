import { TestBed } from '@angular/core/testing';

import { RegisterCodeService } from './register-code.service';

describe('RegisterCodeService', () => {
  let service: RegisterCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
