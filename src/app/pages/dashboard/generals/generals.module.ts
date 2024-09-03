import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralsRoutingModule } from './generals-routing.module';
import { GeneralsComponent } from './generals.component';
import { FormRolesComponent } from './roles/form-roles/form-roles.component';
import { SharedModule } from '../../../shared/shared.module';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { GeneralsHomeComponent } from './generals-home/generals-home.component';


@NgModule({
  declarations: [
    GeneralsComponent,
    ListRolesComponent,
    FormRolesComponent,
    GeneralsHomeComponent
  ],
  imports: [
    CommonModule,
    GeneralsRoutingModule,
    SharedModule
  ]
})
export class GeneralsModule { }
