import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CollaboratorRoutingModule } from './collaborator-routing.module';
import { CollaboratorAreaComponent } from './collaborator-area/collaborator-area.component';
import { AlertAreaComponent } from './alert-area/alert-area.component';


@NgModule({
  declarations: [
    CollaboratorAreaComponent,
    AlertAreaComponent
  ],
  imports: [
    CommonModule,
    CollaboratorRoutingModule,
    SharedModule
  ]
})
export class CollaboratorModule { }
