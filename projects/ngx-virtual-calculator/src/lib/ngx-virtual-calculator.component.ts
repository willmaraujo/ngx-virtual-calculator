import { Component, OnInit } from '@angular/core';
import {NgxVirtualCalculatorService} from './ngx-virtual-calculator.service';

@Component({
  selector: 'ngx-virtual-calculator',
  templateUrl: './ngx-virtual-calculator.component.html',
  styles: ['./ngx-virtual-calculator.component.css']
})
export class NgxVirtualCalculatorComponent implements OnInit {

  private n1: string;
  private n2: string;
  private result: number;
  private operation: string;

  constructor(private calculatorService: NgxVirtualCalculatorService) { }

  ngOnInit(): void {
    this.clear();
  }

  /**
   * Initialize all operators with standard value
   */
  clear(): void {
    this.n1 = '0';
    this.n2 = null;
    this.result = null;
    this.operation = null;
  }

  /**
   * Add a number inside calculator display
   * @param mNumber number to be shown
   */
  addNumber(mNumber: string): void {
    if (this.operation === null) {
      this.n1 = this.concatenateNumber(this.n1, mNumber);
    } else {
      this.n2 = this.concatenateNumber(this.n2, mNumber);
    }
  }


  /**
   * Returns the concatenate value with decimal treat
   * @param currentNumber current number displayed
   * @param concatNumber number to be concatenate
   */
  concatenateNumber(currentNumber: string, concatNumber: string): string {
    if (currentNumber === '0' || currentNumber === null) {
      currentNumber = '';
    }

    if (concatNumber === '.' && currentNumber === '') {
      return '0.';
    }

    if (concatNumber === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }

    return currentNumber + concatNumber;
  }

  /**
   * Defines the operation to be executed
   * @param operation operation to be executed
   */
  defineOperation(operation: string): void {
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    if (this.n2 !== null) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.n1),
        parseFloat(this.n2),
        this.operation);

      this.operation = operation;
      this.n1 = this.result.toString();
      this.n2 = null;
      this.result = null;
    }
  }

  /**
   * Calculate when equal button is pressed
   */
  calculate(): void {
    if (this.n2 === null) {
      return;
    }

    this.result = this.calculatorService.calculate(
      parseFloat(this.n1),
      parseFloat(this.n2),
      this.operation);
  }

  /**
   * Returns the value which sohuld to be displayed on the screen
   */
  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }

    if (this.n2 !== null) {
      return this.n2;
    }

    return this.n1;
  }

}
