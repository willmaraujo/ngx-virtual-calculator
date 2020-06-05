import { TestBed } from '@angular/core/testing';

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
});
