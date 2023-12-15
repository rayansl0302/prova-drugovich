import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  totalClients: number = 0;
  displayedClients: number = 0;


  constructor(private clienteService: ClienteService, private _snackBar: MatSnackBar) {


  }

  ngOnInit(): void {
    this.getClients();
  }
  getClients() {
    this.clienteService.getClients().subscribe((res) => {
      this.clients = res as Clients[];
      this.totalClients = this.clients.length;
      this.displayedClients = this.totalClients;
    })
    console.log(this.clients)
  }
}
