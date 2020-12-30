import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewReminder } from './new-reminder/new-reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(private http: HttpClient) { }

  createReminder(value: NewReminder): Observable<number> {
    return this.http.post<number>('https://localhost:5001/api/reminder', value);
  }
}
