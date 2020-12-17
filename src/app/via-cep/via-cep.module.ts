import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViaCepComponent } from './via-cep.component';
import { ViaCepRoutingModule } from './via-cep.routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { TextMaskModule } from 'angular2-text-mask';



@NgModule({
  declarations: [ViaCepComponent],
  imports: [
    CommonModule,
    ViaCepRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    TextMaskModule

  ]
})
export class ViaCepModule { }
