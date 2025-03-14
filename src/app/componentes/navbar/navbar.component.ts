import { Component, OnInit } from '@angular/core';
import { ModprimengModule } from '../../modprimeng.module';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    ModprimengModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  perfil: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Cursos',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Python',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'Unity',
                        icon: 'pi pi-pencil'
                    }
                ]
            },
            {
                label: 'Contacto',
                icon: 'pi pi-envelope'
            }
        ];

        this.perfil = [
            {
                label: 'ingresar',
                icon: 'pi pi-user',
                routerLink: '/login'
            },
            {
                label: 'registrar',
                icon: 'pi pi-pencil',
                routerLink: 'register'
            },

        ]
    }
}
