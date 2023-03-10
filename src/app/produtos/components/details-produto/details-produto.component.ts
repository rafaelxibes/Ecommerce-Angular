import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-details-produto',
  templateUrl: './details-produto.component.html',
  styles: [
  ]
})
export class DetailsProdutoComponent implements OnInit{

  produto!: Produto;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log(params['id']);
      });
  }
}
