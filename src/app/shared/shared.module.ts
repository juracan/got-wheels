import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmPopupModule,
  ],
  exports: [
    SelectComponent,
    InputComponent,
    ButtonComponent,
    ToastComponent,
    ConfirmPopupModule,
  ],
})
export class SharedModule {}
