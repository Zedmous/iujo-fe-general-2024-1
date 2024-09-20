import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RrhhRoutingModule } from './rrhh-routing.module';
import { RrhhHomeComponent } from './rrhh-home/rrhh-home.component';
import { RrhhReportsComponent } from './rrhh-reports/rrhh-reports.component';
import { ConceptComponent } from './concept/concept.component';
import { ListConceptComponent } from './concept/list-concept/list-concept.component';
import { FormConceptComponent } from './concept/form-concept/form-concept.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RrhhHomeComponent,
    RrhhReportsComponent,
    ConceptComponent,
    ListConceptComponent,
    FormConceptComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
  ]
})
export class RrhhModule {}
