import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../models/cliente.model';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  getClients() {
    return this.http.get('https://demo4529396.mockable.io/clients')
  }

  postClients(cliente: Clients) {
    return this.http.post('https://demo4529396.mockable.io/clients', cliente)
  }

  editClients(cliente: Clients) {
    return this.http.put(`https://demo4529396.mockable.io/clients/${cliente.cnpj}`,cliente)
  }
  deleteClients(cnpj: number) {
    return this.http.delete(`http://localhost:3000/pessoa/${cnpj}`)
  }
}
