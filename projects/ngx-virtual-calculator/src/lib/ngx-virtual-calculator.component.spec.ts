import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVirtualCalculatorComponent } from './ngx-virtual-calculator.component';

describe('NgxVirtualCalculatorComponent', () => {
  let component: NgxVirtualCalculatorComponent;
  let fixture: ComponentFixture<NgxVirtualCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxVirtualCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVirtualCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
