import { Component, Inject } from '@angular/core';
import { RoleInterface } from '../../../../core/interfaces/role.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../../../core/services/role.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _ from "lodash";
@Component({
  selector: 'app-form-roles',
  templateUrl: './form-roles.component.html',
  styleUrl: './form-roles.component.css'
})
export class FormRolesComponent {


  title:string="";
  role: Partial<RoleInterface> = {
    name:""
  }

  forms: FormGroup;
  constructor(
    private fb: FormBuilder,
    private roleService:RoleService,
    private snackBar: MatSnackBar,
    private router:Router,
    private ref: MatDialogRef<FormRolesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partial<RoleInterface>
  ) {
    this.role = data;
    if(this.role.action=="ver"){
      this.title="Ver";
    }else if(this.role.action=="editar"){
      this.title="Editar";
    }else{
      this.title="Crear";
      this.role.action="";
    }
    this.forms = fb.group({
      name: [this.data? this.data.name : "", Validators.required],
    })
  }

  ngOnInit(): void {

  }

  get name() {
    return this.forms.get('name');
  }

  save() {
    const value:RoleInterface=this.forms.value;
    if (this.title=="Crear") {
      this.created(value);
    } else {
      this.updated(value);
    }
  }
  created(value:RoleInterface){
    this.roleService.create(value).subscribe((res:any)=>{
      this.snackBar.open('Rol registrado exitosamente', '', {
        duration:1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      this.ref.close(res.data.role);
    },(error)=>{

    })
  }
  updated(value:RoleInterface) {
    this.roleService.update(this.role.id, value).subscribe(
      (res:any) => {
        this.ref.close(_.merge(this.data, res.data));
      },
      (error) => {

      }
    );
  }
}
