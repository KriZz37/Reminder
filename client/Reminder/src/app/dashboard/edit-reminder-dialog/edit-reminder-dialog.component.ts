import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReminderService } from 'src/app/new-reminder/reminder.service';
import { Reminder } from '../reminder-list/reminder';

@Component({
  selector: 'app-edit-reminder-dialog',
  templateUrl: './edit-reminder-dialog.component.html',
  styleUrls: ['./edit-reminder-dialog.component.css']
})
export class EditReminderDialogComponent implements OnInit {
  reminder;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Reminder,
    public dialogRef: MatDialogRef<EditReminderDialogComponent>,
    private fb: FormBuilder,
    private reminderService: ReminderService) {
      this.reminder = data;
     }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.data.name,
      date: this.data.date
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit(value: Reminder): void {
    value.reminderId = this.reminder.reminderId;
    this.reminderService.editReminder(value).subscribe(() => {
      window.location.reload();
    });
  }

}
