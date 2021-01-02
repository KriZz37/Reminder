import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReminderService } from 'src/app/new-reminder/reminder.service';
import { DataTransferService } from '../data-transfer.service';
import { EditReminderDialogComponent } from '../edit-reminder-dialog/edit-reminder-dialog.component';
import { Reminder } from '../reminder-list/reminder';
import { ReminderListComponent } from '../reminder-list/reminder-list.component';

@Component({
  selector: 'app-reminder-options',
  templateUrl: './reminder-options.component.html',
  styleUrls: ['./reminder-options.component.css']
})
export class ReminderOptionsComponent implements OnInit {
  reminderDetails: Reminder;

  constructor(
    private data: DataTransferService,
    private reminderService: ReminderService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.currentReminderDetails.subscribe(x => this.reminderDetails = x);
  }

  removeReminder(): void {
    this.reminderService.removeReminder(this.reminderDetails.reminderId).subscribe(() => {
      window.location.reload();
    });
  }

  editReminder(): void {
    const dialogRef = this.dialog.open(EditReminderDialogComponent, {
      data: this.reminderDetails
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

}
