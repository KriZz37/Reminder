import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../dashboard/comment-list/comment';
import { NewComment } from '../dashboard/new-comment-dialog/new-comment';
import { Reminder } from '../dashboard/reminder-list/reminder';
import { NewReminder } from './new-reminder';


@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(private http: HttpClient) { }

  createReminder(value: NewReminder): Observable<number> {
    return this.http.post<number>('https://localhost:5001/api/reminder', value);
  }

  removeReminder(reminderId: number): Observable<any> {
    return this.http.delete<any>(`https://localhost:5001/api/reminder/${reminderId}`);
  }

  editReminder(reminder: Reminder): Observable<any> {
    return this.http.put<any>('https://localhost:5001/api/reminder', reminder);
  }

  getAllReminders(accountId: number): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`https://localhost:5001/api/reminder/${accountId}`);
  }

  getRemindersBetween(from: string, to: string, accountId: number): Observable<Reminder[]> {
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('to', to);

    return this.http.get<Reminder[]>(`https://localhost:5001/api/reminder/between/${accountId}`, {params});
  }

  getReminderComments(reminderId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://localhost:5001/api/reminder/comment/${reminderId}`);
  }

  createComment(newComment: NewComment): Observable<any> {
    return this.http.post<any>('https://localhost:5001/api/reminder/comment', newComment);
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete<any>(`https://localhost:5001/api/reminder/Comment/${commentId}`);
  }
}
