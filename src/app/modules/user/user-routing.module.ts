import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandWashComponent } from './hand-wash/hand-wash.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
;

const routes: Routes = [
  {
    path: 'panel',
    component: UserPanelComponent
  },
  {
    path: 'hand-wash',
    component: HandWashComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
