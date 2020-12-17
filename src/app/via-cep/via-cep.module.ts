import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViaCepComponent } from './via-cep.component';
import { ViaCepRoutingModule } from './via-cep.routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViaCepComponent],
  imports: [
    CommonModule,
    ViaCepRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ViaCepModule { }
