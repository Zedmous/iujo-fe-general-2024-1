import { Component} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-form-inventory',
  templateUrl: './form-inventory.component.html',
  styleUrl: './form-inventory.component.css',
})

export class FormInventoryComponent {

}
