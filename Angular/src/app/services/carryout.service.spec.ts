import { TestBed } from '@angular/core/testing';

import { CarryoutService } from './carryout.service';

describe('CarryoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarryoutService = TestBed.get(CarryoutService);
    expect(service).toBeTruthy();
  });
});
