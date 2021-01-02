import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reminder } from './reminder-list/reminder';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private reminderDetailsSource = new BehaviorSubject<Reminder>(new Reminder());
  currentReminderDetails = this.reminderDetailsSource.asObservable();

  constructor() { }

  changeReminderDetails(reminder: Reminder): void {
    this.reminderDetailsSource.next(reminder);
  }
}
