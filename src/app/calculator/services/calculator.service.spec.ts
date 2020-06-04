import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it must ensure that 1 + 4 = 5',
    inject([CalculatorService], (mService: CalculatorService) => {
      const sum = mService.calculate(1, 4, CalculatorService.SUM);
      expect(sum).toEqual(5);
    }));

  it('it must ensure that 2 * 3 = 6',
    inject([CalculatorService], (mService: CalculatorService) => {
      const mult = mService.calculate(2, 3, CalculatorService.MULT);
      expect(mult).toEqual(6);
    }));

  it('it must ensure that operation is invalid',
    inject([CalculatorService], (mService: CalculatorService) => {
      const result = mService.calculate(2, 3, "invalidajsi");
      expect(result).toEqual(0);
    }))
});
