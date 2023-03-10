import { Component, Input } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'grid-card',
  templateUrl: './grid-card.component.html'
})
export class GridCardComponent {
    @Input() produto!: Produto;
}