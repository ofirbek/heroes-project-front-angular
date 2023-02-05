import { TestBed } from '@angular/core/testing';

import { HeroesGuard } from './heroes.guard';

describe('HeroesGuard', () => {
  let guard: HeroesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeroesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
