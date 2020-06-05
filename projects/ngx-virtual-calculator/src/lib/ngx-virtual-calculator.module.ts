import { NgModule } from '@angular/core';
import { NgxVirtualCalculatorComponent } from './ngx-virtual-calculator.component';
import { NgxVirtualCalculatorService } from './ngx-virtual-calculator.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NgxVirtualCalculatorComponent],
  imports: [CommonModule],
  exports: [NgxVirtualCalculatorComponent],
  providers: [NgxVirtualCalculatorService]
})
export class NgxVirtualCalculatorModule { }
