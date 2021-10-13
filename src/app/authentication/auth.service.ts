import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUser(data: { name: any; email: any; password: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient ) { }

  userLogin(data: any): Observable<any> {
    const url='http://localhost:3000/api/login';
    return this.http.post( url, data)
  }
  userRegister(data: any): Observable<any> {
    const url='http://localhost:3000/api/register';
    return this.http.post( url, data)
  }
  
}

