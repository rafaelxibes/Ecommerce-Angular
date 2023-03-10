import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from "../icons/icons.module";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        IconsModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ]
})
export class NavegacaoModule {}