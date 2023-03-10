import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContaComponent } from './conta.component'
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EnderecoComponent } from './endereco/endereco.component';


const ContaRoutes: Routes = [
    { path: '', component: ContaComponent,
        children: [
            { path: 'login', component: LoginComponent},
            { path: 'cadastro', component: CadastroComponent},
            { path: 'homepage', component: HomePageComponent},
            { path: 'carrinho', component: CarrinhoComponent},
            { path: 'pedidos', component: PedidosComponent},
            { path: 'endereco', component: EnderecoComponent}
        ]
    } 
];

@NgModule({
  imports: [RouterModule.forChild(ContaRoutes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }