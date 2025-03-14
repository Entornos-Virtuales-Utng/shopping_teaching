import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ModprimengModule } from './modprimeng.module';
import { NavbarComponent } from "./componentes/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModprimengModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'shoponline_gbr';

  constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
}
