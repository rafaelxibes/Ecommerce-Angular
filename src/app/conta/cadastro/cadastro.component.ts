import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})
export class CadastroComponent implements OnInit, AfterViewInit {

  errors: any[] = [];
  cadastroForm!: FormGroup;
  cliente!: Cliente;

  constructor(private fb: FormBuilder, private contaService: ContaService) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    })
  }

  ngAfterViewInit(): void {
    
  }

  cadastrarCliente() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid){
      
      this.contaService.cadastrarCliente(this.cliente);
    }
  }
}
