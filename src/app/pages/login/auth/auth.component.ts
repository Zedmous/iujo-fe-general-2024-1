import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/interfaces/user';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  forms: FormGroup;
  loading: Boolean = false;
  user: Partial<User> = {
    email: "",
    password: ""
  }
  error: boolean | undefined;
  errorLogin:boolean=false;
  constructor(
    private fb: FormBuilder,
    private loginServices: LoginService,
    private router:Router
  ) {
    this.forms = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {

  }
  get usuario() {
    return this.forms.value.email;
  }
  get password() {
    return this.forms.value.password;
  }
  login(){
    this.loading = true;
    this.loginServices.login(this.user).subscribe(
      (res: any) => {
        console.log("Login exitoso")
        localStorage.setItem('token', res.data);
        this.router.navigate(['dashboard']);
      },
      (err:any)=>{
        console.log("Login no exitoso")
      }
    )
  }
  /*
  login() {
    this.loading = true;
    console.log(this.forms)
    const { usuario, password } = this.forms.value;
    console.log(usuario, password)
    this.loading = true;
    this.authServices.login(this.user).subscribe((res: any) => {
      console.log("Login exitoso")
      console.log("Token: ",decode(res.data.access_token))
      localStorage.setItem('token', res.data.access_token);
      this.credencialService.setUsers(res.data.user);
      this.router.navigate(['dashboard']);
    }, (error:any) => {
      this.loading = false;
      this.error = false;
      this.terror();
      if (error.status == 401) {
        if (error.error.error == "Incorrect user or password") {
          this.snackBar.open('Usuario o Clave incorrecta', '', {
            duration:5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        } else if (error.error.error == 'The user is not authorized to enter, his account is disabled. Contact the administrator.') {
          this.snackBar.open('Este usuario se encuentra deshabilitado comuniquese con su administrador', '', {
            duration:5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
      }
    });

  }*/
  /*terror(){
    this.snackBar.open('Usuario o Clave incorrecta', '', {
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }*/
}
