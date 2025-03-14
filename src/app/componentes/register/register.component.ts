import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModprimengModule } from '../../modprimeng.module';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { passwordMatchValidator } from '../../shared/password-match.directives';
import { AuthService } from '../../servicios/auth.service';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ModprimengModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService, 
    private messageService: MessageService, private router:Router){

    this.registerForm = this.fb.group ({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      role: ['usuario'],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: passwordMatchValidator
    });
  }

  get email() {
    return this.registerForm.controls['email']
  }

  get fullname() {
    return this.registerForm.controls['fullname']
  }

  get password() {
    return this.registerForm.controls['password']
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword']
  } 
  
  enviarRegistro() {
    const data = {...this.registerForm.value};

    delete data.confirmPassword;

    this.authService.registroUsuario(data as User).subscribe(
      response => {
        console.log(response)
        this.messageService.add({severity:'success', summary: 'success',
          detail: 'Registro Agregado con éxito'
        })
      },
      error => console.log(error)
    )
  }
}
