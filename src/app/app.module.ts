import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './modules/account/account.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuardService } from './guard/auth-guard.service';
import { GameficationModule } from './modules/gamefication/gamefication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    HttpClientModule,

  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
