import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarModule} from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { CardModule} from 'primeng/card';

const misModulos: any = [
  AvatarModule,
  BadgeModule,
  ButtonModule,
  CardModule,
  MenubarModule,
  IconField,
  InputIcon,
  InputTextModule,
  Ripple,
  SplitButton,
  ToastModule,
  ToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    misModulos
  ], 
  exports: [
    misModulos
  ]
})
export class ModprimengModule { }
