import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReminderService } from 'src/app/new-reminder/reminder.service';
import { DataTransferService } from '../data-transfer.service';
import { Reminder } from './reminder';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  displayedColumns = ['name', 'commentCount', 'date'];
  reminders: MatTableDataSource<Reminder>;
  showAll: boolean;
  accountId: number;

  constructor(
    private reminderService: ReminderService,
    private data: DataTransferService) { }

  ngOnInit(): void {
    this.accountId = Number(localStorage.getItem('userId'));

    this.showAll = false;
    this.getNextMonthReminders();
  }

  changeView(): void {
    if (this.showAll === false) {
      this.showAll = true;
      this.getAllReminders();
    } else {
      this.showAll = false;
      this.getNextMonthReminders();
    }
  }

  getAllReminders(): void {
    this.reminderService.getAllReminders(this.accountId).subscribe(x => {
      this.reminders = new MatTableDataSource(x);
    });
  }

  getNextMonthReminders(): void {
    this.reminderService.getRemindersBetween(this.getTodayDate(), this.getMonthLaterDate(), this.accountId)
      .subscribe(x => {
        this.reminders = new MatTableDataSource(x);
      });
  }

  getMonthLaterDate(): string {
    const today = new Date();
    today.setDate(today.getDate() + 31);

    return `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1)
      .padStart(2, '0')}-${String(today.getFullYear())}`;
  }

  getTodayDate(): string {
    const today = new Date();

    return `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1)
      .padStart(2, '0')}-${String(today.getFullYear())}`;
  }

  sendId(value: Reminder): void {
    this.data.changeReminderDetails(value);
  }

}
