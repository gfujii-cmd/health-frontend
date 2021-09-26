import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from '../account/edit-user/edit-user.component';
import { CollaboratorAreaComponent } from '../collaborator/collaborator-area/collaborator-area.component';
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
  },
  {
    path:'collaborator-area',
    component: CollaboratorAreaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
