import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameficationRoutingModule } from './gamefication-routing.module';

@NgModule({
  declarations: [
    BadgeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GameficationRoutingModule
  ]
})
export class GameficationModule { }
