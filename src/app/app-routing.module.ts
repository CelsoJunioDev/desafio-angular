import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViaCepComponent } from './via-cep/via-cep.component';

const routes: Routes = [
  {
    path: 'via-cep',
    component: ViaCepComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
