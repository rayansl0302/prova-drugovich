import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormularioComponent } from './formulario.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { provideNgxMask } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let snackBar: MatSnackBar;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      imports: [ReactiveFormsModule, MatSnackBarModule,HttpClientModule,BrowserAnimationsModule],
      providers: [FormBuilder, MatSnackBar,provideNgxMask()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário com valores vazios', () => {
    expect(component.form.value).toEqual({ name: '', cnpj: '', status: '' });
  });

  it('deve exibir uma mensagem de erro para campos obrigatórios', () => {
    const nameControl = component.form.get('name');
    nameControl?.setValue('');
    expect(nameControl?.hasError('required')).toBeTruthy();

    const cnpjControl = component.form.get('cnpj');
    cnpjControl?.setValue('');
    expect(cnpjControl?.hasError('required')).toBeTruthy();

    const statusControl = component.form.get('status');
    statusControl?.setValue('');
    expect(statusControl?.hasError('required')).toBeTruthy();
  });


  it('deve abrir um snackbar quando o formulário é enviado com sucesso', () => {
    spyOn(snackBar, 'open');
    component.form.setValue({ name: 'Cliente de Teste', cnpj: '00.000.000/0000-00', status: 'ativo' });
    component.submitForm();
    expect(snackBar.open).toHaveBeenCalledWith('Cadastro realizado com sucesso!', 'Ok');
  });
  
});
