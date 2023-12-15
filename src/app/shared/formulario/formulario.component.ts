import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clients } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  @Input() clients!: Clients;
  @Output() salvarClients = new EventEmitter<Clients>();
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientsService: ClienteService, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  submitForm() {
    console.log(this.form.value)
    this._snackBar.open('Cadastro realizado com sucesso!', 'Ok');
  }

}
