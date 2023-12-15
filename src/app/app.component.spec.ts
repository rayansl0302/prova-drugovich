import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent]
    });

    // Cria uma instância do componente e fixture antes de cada teste
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  // Testa se o componente foi criado com sucesso
  it('deve criar o componente', () => {
    expect(app).toBeTruthy();
  });

  // Testa se o título inicial do componente é 'teste'
  it(`deve ter o título 'teste'`, () => {
    expect(app.title).toEqual('teste');
  });

  // Exemplo adicional para ilustrar como reutilizar o mesmo fixture em múltiplos testes
  it(`deve ter o mesmo título 'teste' usando a mesma fixture`, () => {
    expect(app.title).toEqual('teste');
  });
});
