import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../services';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      providers: [CalculatorService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud ensure that 3 + 2 = 5', () => {
    const btn3 = fixture.debugElement.query(By.css('#btn3'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btnSum = fixture.debugElement.query(By.css('#btnSum'));
    const btnCalculate = fixture.debugElement.query(By.css('#btnCalculate'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSum.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });

  it('shoud ensure that 7 - 10 = -3', () => {
    const btn7 = fixture.debugElement.query(By.css('#btn7'));
    const btn1 = fixture.debugElement.query(By.css('#btn1'));
    const btn0 = fixture.debugElement.query(By.css('#btn0'));
    const btnSub = fixture.debugElement.query(By.css('#btnSub'));
    const btnCalculate = fixture.debugElement.query(By.css('#btnCalculate'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn7.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSub.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn0.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('-3');
  });

  it('shoud ensure that 73 * 120 = 8760', () => {
    const btn7 = fixture.debugElement.query(By.css('#btn7'));
    const btn3 = fixture.debugElement.query(By.css('#btn3'));
    const btn1 = fixture.debugElement.query(By.css('#btn1'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btn0 = fixture.debugElement.query(By.css('#btn0'));
    const btnMult = fixture.debugElement.query(By.css('#btnMult'));
    const btnCalculate = fixture.debugElement.query(By.css('#btnCalculate'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn7.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMult.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn0.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('8760');
  });

  it('shoud ensure that a number divided by 9 is Infinity', () => {
    const btn7 = fixture.debugElement.query(By.css('#btn7'));
    const btn0 = fixture.debugElement.query(By.css('#btn0'));
    const btnDiv = fixture.debugElement.query(By.css('#btnDiv'));
    const btnCalculate = fixture.debugElement.query(By.css('#btnCalculate'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn7.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDiv.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn0.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('Infinity');
  });

  it('shoud ensure that 50 / 8 = 6.25', () => {
    const btn5 = fixture.debugElement.query(By.css('#btn5'));
    const btn0 = fixture.debugElement.query(By.css('#btn0'));
    const btn8 = fixture.debugElement.query(By.css('#btn8'));
    const btnDiv = fixture.debugElement.query(By.css('#btnDiv'));
    const btnCalculate = fixture.debugElement.query(By.css('#btnCalculate'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn5.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn0.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDiv.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn8.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('6.25');
  });
});
