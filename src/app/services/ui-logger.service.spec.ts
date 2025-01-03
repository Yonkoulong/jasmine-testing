import { TestBed } from '@angular/core/testing';

import { UiLoggerService } from './ui-logger.service';

describe('UiLoggerService', () => {
  let service: UiLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
