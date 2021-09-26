import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertAreaComponent } from './alert-area/alert-area.component';
import { CollaboratorAreaComponent } from './collaborator-area/collaborator-area.component';

const routes: Routes = [
  {
    path: 'area',
    component: CollaboratorAreaComponent
  },
  {
    path: 'alert',
    component: AlertAreaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaboratorRoutingModule { }
