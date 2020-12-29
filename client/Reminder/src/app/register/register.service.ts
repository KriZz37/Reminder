import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(value: Register): Observable<boolean> {
    return this.http.post<boolean>('https://localhost:5001/api/register', value);
  }

}
