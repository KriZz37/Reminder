import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './login';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(value: Login): Observable<User> {
    return this.http.post<User>('https://localhost:5001/api/login', value);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
