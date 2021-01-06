import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../login/login';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(value: Login): Observable<User> {
    return this.http.post<User>('https://localhost:5001/api/login', value)
    .pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);

      return user;
    }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User());
    this.router.navigate(['/login']);
  }
}
