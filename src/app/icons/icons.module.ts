import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartArrowDown, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class IconsModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(faCartShopping, faUser, faCartArrowDown, faStar);
  }
}
