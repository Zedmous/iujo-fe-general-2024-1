import { ConceptsInterface } from '../../../../../core/interfaces/concept.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConceptService } from '../../../../../core/services/concept.service';


@Component({
  selector: 'app-form-concept',
  templateUrl: './form-concept.component.html',
  styleUrls: ['./form-concept.component.css'] // Asegúrate de que este archivo exista
})
export class FormConceptComponent implements OnInit {
  nameError: string | null = null; // Variable para almacenar el mensaje de error
  title: string = '';
  concept: Partial<ConceptsInterface> = {};

  forms: FormGroup;


  constructor(
    private fb: FormBuilder,
    private conceptService: ConceptService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<FormConceptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partial<ConceptsInterface>,
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

  save() {
    const value: ConceptsInterface = this.forms.value;
    if (this.title === 'Crear') {
      this.created(value); // Llama al método created para crear un nuevo concepto
    } else {
      this.updated(value); // Llama al método updated para editar un concepto existente
    }
  }

  created(value: ConceptsInterface) {
    // Método para crear un nuevo concepto
    this.conceptService.create(value).subscribe(
      (res: any) => {
        if (res && res.data && res.data.concept) { // Verifica la estructura de la respuesta
          this.snackBar.open('Concepto registrado exitosamente', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
          this.dialogRef.close(res.data.concept); // Cierra el diálogo y pasa el concepto creado
        } else {
          this.snackBar.open('Error al registrar el concepto', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }
      },
      (e: any) => {
        console.log('DATOS', e.error.errors);
        if (e.status === 400 && e.error.errors[0].path === 'namedeductions') {
          this.nameError = e.error.errors[0].msg; // Muestra el mensaje de error correspondiente
        }
      }
    );
  }

  updated(value: ConceptsInterface) {
    // Método para actualizar un concepto existente
    if (typeof this.concept.idconcepts === 'number') {
      this.conceptService.update(this.concept.idconcepts, value).subscribe(
        (res) => {
          this.snackBar.open('Concepto actualizado exitosamente', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
          this.dialogRef.close(); // Cierra el diálogo

        },
        (er) => {
          console.error('Error al actualizar', er);
          if (er.status === 400) {
            let i = 0;
            while (er[i]) {
              if (er[i].path === 'namedeductions') {
                this.nameError = 'El nombre ya está en uso'; // Muestra el mensaje de error correspondiente
              }
              i++;
            }
          }
        }
      );
    } else {
      console.error('ID del concepto no está definido o no es un número');
      this.snackBar.open('ID del concepto no está disponible', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}
