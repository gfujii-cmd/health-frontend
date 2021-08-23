import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [],
})
export class AccountModule { }
