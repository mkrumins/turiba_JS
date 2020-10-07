import { TestBed } from '@angular/core/testing';

import { GuardpageGuard } from './guardpage.guard';

describe('GuardpageGuard', () => {
  let guard: GuardpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
