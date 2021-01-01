import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReminderService } from 'src/app/new-reminder/reminder.service';
import { NewComment } from './new-comment';

@Component({
  selector: 'app-new-comment-dialog',
  templateUrl: './new-comment-dialog.component.html',
  styleUrls: ['./new-comment-dialog.component.css']
})
export class NewCommentDialogComponent implements OnInit {
  form: FormGroup;
  reminderId;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    public dialogRef: MatDialogRef<NewCommentDialogComponent>,
    private fb: FormBuilder,
    private reminderService: ReminderService) {
     this.reminderId = data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      message: ''
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit(value: NewComment): void {
    if (value.message) {
      value.message.replace(/\n/g, '<br />');
      value.reminderId = this.reminderId;

      this.reminderService.createComment(value).subscribe(() => {
        this.cancel();
      });
    }
  }

}
