import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForNumberPipe} from "../pipes/for-number.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForNumberPipe],
  exports: [ForNumberPipe]
})
export class SharedModule { }
