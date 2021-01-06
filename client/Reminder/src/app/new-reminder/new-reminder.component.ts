import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NewReminder } from './new-reminder';
import { ReminderService } from './reminder.service';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.css']
})
export class NewReminderComponent implements OnInit {
  form: FormGroup;
  error: boolean;

  constructor(
    private fb: FormBuilder,
    private reminderService: ReminderService,
    private router: Router,
    private datePipe: DatePipe,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      date: ''
    });
  }

  onSubmit(value: NewReminder): void {
    if (value.date !== '' && value.date !== '') {
      this.error = false;
      value.accountId = this.authService.getCurrentUserValue().userId;
      const date = this.datePipe.transform(value.date, 'dd-MM-yyyy');
      value.date = date == null ? '' : date.toString();

      this.reminderService.createReminder(value).subscribe(x => {
        if (x === -1) {
          this.error = true;
        } else {
          this.router.navigate(['/']);
        }
      });
    }
  }

}
