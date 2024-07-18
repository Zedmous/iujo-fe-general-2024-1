import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  menus = [
    {
      nombre: 'Home',
      redirect: '/',
    },
    {
      nombre: 'Iniciar sesión',
      redirect: './auth',
    },
    {
      nombre: 'Registrarse',
      redirect: './register',
    },
  ];
  constructor(){}
  /*
  forms: FormGroup;
  loading: Boolean = false;
  user: Partial<User> = {
    email: '',
    password: '',
  };
  error: boolean | undefined;
  errorLogin: boolean = false;
  constructor(
    private loginServices: LoginService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.forms = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  get usuario() {
    return this.forms.value.usuario;
  }
  get password() {
    return this.forms.value.password;
  }

  login() {
    this.loading = true;
    const { email, password } = this.forms.value;
    console.log(email, password);
    this.loading = true;
    this.loginServices.login(this.user).subscribe(
      (resp: any) => {
        console.log('---------------------------------------');
        console.log(resp);


        this.router.navigate(['dashboard']);
      },
      (error: any) => {
        this.loading = false;
        this.error = false;
        this.terror();
        console.log('error: ', error.error);
        if (error.status == 400) {
          console.log('error: ', 'error');
        } else {
        }
      }
    );
  }
  terror() {
    this.snackBar.open('Usuario o Clave incorrecta', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }*/
}
