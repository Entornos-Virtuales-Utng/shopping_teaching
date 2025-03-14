import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ModprimengModule } from '../../modprimeng.module';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servicios/auth.service';
import { MessageService } from 'primeng/api';
import { utils } from '../../utils/utils';
import { User } from '../../interfaces/user';
import { Mensaje } from '../../interfaces/mensaje';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ModprimengModule, RouterModule, CommonModule  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService,
    private messageService: MessageService, private router:Router
  ){
    this.loginForm = this.fb.group ({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    });
  }

  get email() {
    return this.loginForm.controls['email']
  }

  get password() {
    return this.loginForm.controls['password']
  }

  login() {
    const {email, password} = this.loginForm.value;
    const usuario: User = {
      id: "1",
      fullname: "",
      email: email,
      password: password
    }

    this.authService.getUserByEmail(usuario as User).subscribe(
      (response)=> {
        let mensaje: Mensaje = response;
        console.log("Respuesta ", mensaje.message)

        if ( mensaje.respuesta === 1) {
          sessionStorage.setItem('email', email as string)
          this.messageService.add({severity: 'success', summary: 'Success', detail: mensaje.message})
          this.router.navigate(['/home'])
        } else {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email o Contraseña Incorrecta'})
        } 
      },
      (error) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email o Contraseña Incorrecta'})

      }

    )
  }
}
