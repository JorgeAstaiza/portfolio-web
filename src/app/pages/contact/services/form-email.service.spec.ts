import { TestBed } from '@angular/core/testing';

import { FormEmailService } from './form-email.service';

describe('FormEmailService', () => {
  let service: FormEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
