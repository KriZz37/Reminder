import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private reminderIdSource = new BehaviorSubject<number>(0);
  currentReminderId = this.reminderIdSource.asObservable();

  constructor() { }

  changeMessage(reminderId: number): void {
    this.reminderIdSource.next(reminderId);
  }
}
