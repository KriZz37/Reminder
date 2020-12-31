import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReminderService } from 'src/app/reminders/reminder.service';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { Reminder } from './reminder';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  displayedColumns = ['name', 'commentCount', 'date'];
  reminders: MatTableDataSource<Reminder>;

  constructor(private reminderService: ReminderService) { }

  ngOnInit(): void {
    const accountId = localStorage.getItem('userId');

    if (accountId) {
      this.reminderService.getAllReminders(Number(accountId)).subscribe(x => {
        this.reminders = new MatTableDataSource(x);
      });
    }
  }

  getDate(): string {
    const today = new Date();

    return `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1)
      .padStart(2, '0')}-${String(today.getFullYear())}`;
  }

}
