import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePassword } from './change-password';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  changePassword(value: ChangePassword): Observable<any> {
    return this.http.put<any>('https://localhost:5001/api/account/password', value);
  }
}
