import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { RoleInterface } from '../../../../../core/interfaces/role.interface';
import { RoleService } from '../../../../../core/services/role.service';
@Component({
  selector: 'app-form-roles',
  templateUrl: './form-roles.component.html',
  styleUrl: './form-roles.component.css',
})
export class FormRolesComponent {
  nameError: string | null = null; // Variable para almacenar el mensaje de error
  title: string = '';
  role: Partial<RoleInterface> = {
    name: '',
  };

  forms: FormGroup;
  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private snackBar: MatSnackBar,
    private router: Router,
    private ref: MatDialogRef<FormRolesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partial<RoleInterface>
  ) {
    this.role = data;
    if (this.role.action == 'ver') {
      this.title = 'Ver';
    } else if (this.role.action == 'editar') {
      this.title = 'Editar';
    } else {
      this.title = 'Crear';
      this.role.action = '';
    }
    this.forms = fb.group({
      name: [this.data ? this.data.name : '', Validators.required],
    });
  }

  ngOnInit(): void {
    this.forms.get('name')?.valueChanges.subscribe(() => {
      this.nameError = null; // Limpia el mensaje de error al cambiar el valor
    });
  }

  get name() {
    return this.forms.get('name');
  }

  save() {
    const value: RoleInterface = this.forms.value;
    if (this.title == 'Crear') {
      this.created(value);
    } else {
      this.updated(value);
    }
  }
  created(value: RoleInterface) {
    this.roleService.create(value).subscribe(
      (res: any) => {
        this.snackBar.open('Rol registrado exitosamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.ref.close(res.data.role);
      },
      (e: any) => {
        console.log('DATOS', e.error.errors);
        if (e.status === 400) {
          if (e.error.errors[0].path == 'name') {
            console.log('urrra');
            this.nameError = e.error.errors[0].msg;
          }

          // Establece el mensaje de error
        }
        console.log('DATOS', e.error.errors);
      }
    );
  }
  updated(value: RoleInterface) {
    this.roleService.update(this.role.id, value).subscribe(
      (res: any) => {
        this.ref.close(res.data);
      },
      (er) => {
        if (er.status === 400) {
          // Suponiendo que 409 es el código de conflicto
          let i = 0;
          while (er) {
            if (er[i].patch == 'name') {
              this.nameError = 'El nombre ya está en uso';
            }
            i++;
          }
          // Establece el mensaje de error
        }
        console.log('DATOS', er[0]);
      }
    );
  }
}
