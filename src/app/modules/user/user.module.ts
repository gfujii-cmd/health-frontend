import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserRoutingModule } from './user-routing.module';
import { ChartsModule } from 'ng2-charts';
import { HandWashComponent } from './hand-wash/hand-wash.component';
import { AuthGuardService } from 'src/app/guard/auth-guard.service';

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
  providers: [],
})
export class UserModule { }
