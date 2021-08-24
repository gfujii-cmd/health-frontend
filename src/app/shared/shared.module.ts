import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WideButtonComponent } from './buttons/wide-button/wide-button.component';
import { BaseInputComponent } from './inputs/base-input/base-input.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    WideButtonComponent,
    BaseInputComponent
  ],
  declarations: [
    HeaderComponent,
    WideButtonComponent,
    BaseInputComponent
  ],
  providers: [],
})
export class SharedModule { }
