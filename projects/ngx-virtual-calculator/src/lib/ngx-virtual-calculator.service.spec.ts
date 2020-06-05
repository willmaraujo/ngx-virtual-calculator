import { TestBed, inject } from '@angular/core/testing';
import { NgxVirtualCalculatorService } from './ngx-virtual-calculator.service';

describe('NgxVirtualCalculatorService', () => {
  let service: NgxVirtualCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVirtualCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it must ensure that 1 + 4 = 5',
    inject([NgxVirtualCalculatorService], (mService: NgxVirtualCalculatorService) => {
      const sum = mService.calculate(1, 4, NgxVirtualCalculatorService.SUM);
      expect(sum).toEqual(5);
    }));

  it('it must ensure that 2 * 3 = 6',
    inject([NgxVirtualCalculatorService], (mService: NgxVirtualCalculatorService) => {
      const mult = mService.calculate(2, 3, NgxVirtualCalculatorService.MULT);
      expect(mult).toEqual(6);
    }));

  it('it must ensure that operation is invalid',
    inject([NgxVirtualCalculatorService], (mService: NgxVirtualCalculatorService) => {
      const result = mService.calculate(2, 3, 'invalidajsi');
      expect(result).toEqual(0);
    }));
});
