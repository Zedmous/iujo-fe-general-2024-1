import { ConceptsInterface } from '../../../../../core/interfaces/concept.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { ConceptService } from '../../../../../core/services/concept.service';
import { SharedModule } from '../../../../../shared/shared.module';
import { MaterialModule } from '../../../../../shared/material/material.module';

@Component({
  selector: 'app-form-concept',
  templateUrl: './form-concept.component.html',
  styleUrl: './form-concept.component.css'
})
export class FormConceptComponent implements OnInit {
  nameError: string | null = null; // Variable para almacenar el mensaje de error
  title: string = '';
  concept: Partial<ConceptsInterface> = {
    namedeductions: '',
    tipeconcept: ''
  };

  forms: FormGroup;

  constructor(
    private fb: FormBuilder,
    private conceptService: ConceptService,
    private snackBar: MatSnackBar,
    private router: Router,
    private ref: MatDialogRef<FormConceptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partial<ConceptsInterface>
  ) {
    this.concept = data;
    if (this.concept.action === 'ver') {
      this.title = 'Ver';
    } else if (this.concept.action === 'editar') {
      this.title = 'Editar';
    } else {
      this.title = 'Crear';
      this.concept.action = '';
    }

    this.forms = fb.group({
      namedeductions: [this.data ? this.data.namedeductions : '', Validators.required],
      tipeconcept: [this.data ? this.data.tipeconcept : '', Validators.required]
    });
  }

  ngOnInit(): void {
    this.forms.get('namedeductions')?.valueChanges.subscribe(() => {
      this.nameError = null; // Limpia el mensaje de error al cambiar el valor
    });
  }

  get namedeductions() {
    return this.forms.get('namedeductions');
  }

  get tipeconcept() {
    return this.forms.get('tipeconcept');
  }

  save() {
    const value: ConceptsInterface = this.forms.value;
    if (this.title === 'Crear') {
      this.created(value);
    } else {
      this.updated(value);
    }
  }

  created(value: ConceptsInterface) {
    this.conceptService.create(value).subscribe(
      (res: any) => {
        this.snackBar.open('Concepto registrado exitosamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.ref.close(res.data.concept);
      },
      (e: any) => {
        console.log('DATOS', e.error.errors);
        if (e.status === 400) {
          if (e.error.errors[0].path === 'namedeductions') {
            this.nameError = e.error.errors[0].msg;
          }
          // Establece el mensaje de error
        }
        console.log('DATOS', e.error.errors);
      }
    );
  }

  updated(value: ConceptsInterface) {
    this.conceptService.update(this.concept.idconcepts, value).subscribe(
      (res: any) => {
        this.ref.close(res.data);
      },
      (er) => {
        if (er.status === 400) {
          // Suponiendo que el código de error es para conflictos
          let i = 0;
          while (er[i]) {
            if (er[i].path === 'namedeductions') {
              this.nameError = 'El nombre ya está en uso';
            }
            i++;
          }
          // Establece el mensaje de error
        }
        console.log('DATOS', er);
      }
    );
  }
}
