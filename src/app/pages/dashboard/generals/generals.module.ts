import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralsRoutingModule } from './generals-routing.module';
import { GeneralsComponent } from './generals.component';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { FormRolesComponent } from './form-roles/form-roles.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    GeneralsComponent,
    ListRolesComponent,
    FormRolesComponent
  ],
  imports: [
    CommonModule,
    GeneralsRoutingModule,
    SharedModule
  ]
})
export class GeneralsModule { }
