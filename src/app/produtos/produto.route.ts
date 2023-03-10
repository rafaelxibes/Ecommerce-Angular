import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridProdutoComponent } from './grid-produto/grid-produto.component';
import { DetailsProdutoComponent } from './components/details-produto/details-produto.component';
import { ProdutoComponent } from './produto.component';

const ProdutoRoutes: Routes = [
    { path: '', component: ProdutoComponent,
      children: [
        { path: '', component: GridProdutoComponent},
        { path: 'datails/:id', component: DetailsProdutoComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ProdutoRoutes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }