import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produto.module').then(m => m.ProdutoModule) },
  { path: 'conta', loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)},
  { path: '**', component: NotFoundComponent} //Ultimo Sempre |  404 URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
