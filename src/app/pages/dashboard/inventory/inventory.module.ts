import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { FormInventoryComponent } from './form-inventory/form-inventory.component';

// ANGULAR MATERIAL
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AccordionInventoryComponent } from './accordion-inventory/accordion-inventory.component';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [
    InventoryComponent,
    FormInventoryComponent,
    AccordionInventoryComponent,
    
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
  ],
  providers: [
    provideNativeDateAdapter()
  ]
})
export class InventoryModule { }
