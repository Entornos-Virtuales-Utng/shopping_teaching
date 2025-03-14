import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  registroUsuario(usuario: User) {
    return this.http.post(`${this.baseURL}/usuario`, usuario);
  }

  getUserByEmail(usuario: User): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.baseURL}/usuario/email`, usuario);
    
  }
}
