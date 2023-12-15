import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ListagemComponent } from './shared/listagem/listagem.component';
import { FormularioComponent } from './shared/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';


import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    ListagemComponent,
    FormularioComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule, MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskDirective, NgxMaskPipe,
    MatProgressSpinnerModule
  ],
  providers: [provideNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
