import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';

const routes: Routes = [
  {
    path: 'badges',
    component: BadgeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameficationRoutingModule { }

