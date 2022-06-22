import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfComponent } from './cpf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CpfComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CpfModule {}
