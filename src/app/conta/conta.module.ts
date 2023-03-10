import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)

import { ContaComponent } from './conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

import { ContaRoutingModule } from "./conta.route";

import { ContaService } from './services/conta.service';

import { IconsModule } from '../icons/icons.module';
import { HomePageComponent } from './home-page/home-page.component';
import { EnderecoComponent } from './endereco/endereco.component';

@NgModule({
  declarations: [
    ContaComponent,
    CadastroComponent,
    LoginComponent,
    PedidosComponent,
    CarrinhoComponent,
    HomePageComponent,
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IconsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
