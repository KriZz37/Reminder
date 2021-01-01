import { HttpClient } from '@angular/common/http';
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

  getAllReminders(accountId: number): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`https://localhost:5001/api/reminder/${accountId}`);
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
