import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../dashboard/reminder-list/reminder';
import { NewReminder } from './new-reminder/new-reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(private http: HttpClient) { }

  createReminder(value: NewReminder): Observable<number> {
    return this.http.post<number>('https://localhost:5001/api/reminder', value);
  }

  getAllReminders(accountId: number): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`https://localhost:5001/api/reminder/${accountId}`);
  }
}
