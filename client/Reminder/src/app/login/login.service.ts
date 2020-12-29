import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(value: Login): Observable<User> {
    return this.http.post<User>('https://localhost:5001/api/login', value);
  }

}
