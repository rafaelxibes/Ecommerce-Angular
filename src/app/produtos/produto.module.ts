import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)

import { GridProdutoComponent } from "./grid-produto/grid-produto.component";
import { ProdutoRoutingModule } from "./produto.route";
import { GridCardComponent } from "./components/grid-card/grid-card.component";
import { DetailsProdutoComponent } from './components/details-produto/details-produto.component';
import { ProdutoComponent } from "./produto.component";


@NgModule({
    declarations: [
        ProdutoComponent,
        GridProdutoComponent,
        GridCardComponent,
        DetailsProdutoComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule
    ],
    exports:[]
})
export class ProdutoModule {}