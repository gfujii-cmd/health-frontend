import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WideButtonComponent } from './buttons/wide-button/wide-button.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    WideButtonComponent
  ],
  declarations: [
    HeaderComponent,
    WideButtonComponent
  ],
  providers: [],
})
export class SharedModule { }
