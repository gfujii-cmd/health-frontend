import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserRoutingModule } from './user-routing.module';
import { ChartsModule } from 'ng2-charts';
import { HandWashComponent } from './hand-wash/hand-wash.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/helpers/auth-interceptor';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    ChartsModule
  ],
  exports: [],
  declarations: [
    UserPanelComponent,
    HandWashComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
})
export class UserModule { }
