import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService],
    });
    service = TestBed.inject(ClienteService);
  });

  // Testa se o serviço foi criado com sucesso
  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });
});
