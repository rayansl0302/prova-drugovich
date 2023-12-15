import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ListagemComponent } from './listagem.component';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('ListagemComponent', () => {
  let component: ListagemComponent;
  let fixture: ComponentFixture<ListagemComponent>;
  let clienteService: jasmine.SpyObj<ClienteService>;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    // Configurando um espião (Spy) para o serviço ClienteService
    clienteService = jasmine.createSpyObj('ClienteService', ['getClients']);

    TestBed.configureTestingModule({
      declarations: [ListagemComponent],
      imports: [MatSnackBarModule, HttpClientTestingModule,MatProgressSpinnerModule],
      providers: [
        { provide: ClienteService, useValue: clienteService },
        MatSnackBar,
      ],
    });

    fixture = TestBed.createComponent(ListagemComponent);
    component = fixture.componentInstance;
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });





});
