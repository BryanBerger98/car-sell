import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCharUppercasePipe } from './first-char-uppercase.pipe';
import { SafeUrlPipe } from './safe-url.pipe';



@NgModule({
  declarations: [
    FirstCharUppercasePipe,
    SafeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstCharUppercasePipe,
    SafeUrlPipe
  ]
})
export class PipesModule { }
