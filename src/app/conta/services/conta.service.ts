import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "../models/cliente";

@Injectable()
export class ContaService {
    constructor(private http: HttpClient) {}

    cadastrarCliente(cliente: Cliente) {

    }

    login(cliente: Cliente) {
        
    }
}