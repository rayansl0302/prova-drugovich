import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  clients: Clients[] = [];
  isLoading: boolean = false;

  totalClients: number = 0;
  displayedClients: number = 0;

  constructor(
    private clienteService: ClienteService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.isLoading = true;

    this.clienteService.getClients().subscribe(
      (res) => {
        this.clients = res as Clients[];
        this.totalClients = this.clients.length;
        this.displayedClients = this.totalClients;
      },
      (error) => {
        console.error('Erro ao obter clientes', error);
        this._snackBar.open('Erro ao carregar clientes.', 'Fechar');
      },
      () => {
        this.isLoading = false; 
      }
    );
  }
}
