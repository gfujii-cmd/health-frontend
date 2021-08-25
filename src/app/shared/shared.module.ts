import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WideButtonComponent } from './buttons/wide-button/wide-button.component';
import { BaseInputComponent } from './inputs/base-input/base-input.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    WideButtonComponent,
    BaseInputComponent,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    WideButtonComponent,
    BaseInputComponent
  ],
  providers: [],
})
export class SharedModule { }
