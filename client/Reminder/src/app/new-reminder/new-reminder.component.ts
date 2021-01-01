import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewReminder } from './new-reminder';
import { ReminderService } from './reminder.service';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.css']
})
export class NewReminderComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reminderService: ReminderService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      date: ''
    });
  }

  onSubmit(value: NewReminder): void {
    const accountId = localStorage.getItem('userId');
    value.accountId = accountId != null ? Number(accountId) : 0;

    this.reminderService.createReminder(value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
