import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-grid-produto',
  templateUrl: './grid-produto.component.html',
  styles: [
  ]
})
export class GridProdutoComponent implements OnInit{

  produtos: Produto[] = [];

  constructor() {}

  ngOnInit() {
    this.produtos = [
      {
        id: 1,
        nome: 'Echo Dot (4ª Geração):',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iusto?',
        marca: 'Amazon',
        categoria: 'Casa inteligente',
        valor: 379,
        imagem: 'echo-dot.jpg',
        ativo: true
      },
      {
        id: 2,
        nome: 'Fire TV Stick',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iusto?',
        marca: 'Amazon',
        categoria: 'Casa inteligente',
        valor: 284,
        imagem: 'fire-stick.jpg',
        ativo: true
      },
      {
        id: 3,
        nome: 'Kindle 11ª Geração',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iusto?',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 284,
        imagem: 'fire-stick.jpg',
        ativo: true
      },
      {
        id: 4,
        nome: 'Kindle 11ª Geração',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iusto?',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 284,
        imagem: 'fire-stick.jpg',
        ativo: true
      },
      {
        id: 5,
        nome: 'Kindle 11ª Geração',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iusto?',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 284,
        imagem: 'fire-stick.jpg',
        ativo: true
      },
      {
        id: 6,
        nome: 'Kindle 11ª Geração',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iusto?',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 284,
        imagem: 'fire-stick.jpg',
        ativo: true
      },
      {
        id: 7,
        nome: 'Kindle 11ª Geração',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iusto?',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 284,
        imagem: 'fire-stick.jpg',
        ativo: true
      },
      {
        id: 8,
        nome: 'Kindle 11ª Geração',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, iusto?',
        marca: 'Amazon',
        categoria: 'Dispositivos Kindle e eBooks',
        valor: 284,
        imagem: 'fire-stick.jpg',
        ativo: true
      }
    ]
  }
}
