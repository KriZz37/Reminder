import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { ChangePassword } from './change-password';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  form: FormGroup;
  passwordChanged: boolean;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      currentPassword: '',
      newPassword: '',
      accountId: 0
    });
  }

  onSubmit(value: ChangePassword): void {
    const accountId = localStorage.getItem('userId');
    value.accountId = accountId != null ? Number(accountId) : 0;

    this.accountService.changePassword(value).subscribe(x => {
      if (x === true) {
        this.passwordChanged = true;
      } else {
        this.passwordChanged = false;
      }
      this.form.reset();
    });
  }
}
