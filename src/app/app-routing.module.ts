import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'viacep',
    loadChildren: () => import('./via-cep/via-cep.module').then(m => m.ViaCepModule)

  },
  {
    path: 'pagetwo',
    loadChildren: () => import('./page-two/page-two.module').then(m => m.PageTwoModule)

  },
  {
    path: '', pathMatch: 'full', redirectTo: '/viacep'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
