import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseInputDirective } from './uppercase-input.directive';



@NgModule({
  declarations: [
    UppercaseInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UppercaseInputDirective
  ]
})
export class DirectivesModule { }
