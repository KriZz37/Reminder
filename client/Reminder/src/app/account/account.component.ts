import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
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
  accountId: number;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.accountId = this.authService.getCurrentUserValue().userId;

    this.form = this.fb.group({
      currentPassword: '',
      newPassword: '',
      accountId: 0
    });
  }

  onSubmit(value: ChangePassword): void {
    value.accountId = this.accountId;

    this.accountService.changePassword(value).subscribe(x => {
      if (x === true) {
        this.passwordChanged = true;
      } else {
        this.passwordChanged = false;
      }
      this.form.reset();
    });
  }

  deleteAccount(): void {
    this.accountService.deleteAccount(this.accountId).subscribe(() =>
    {
      this.authService.logout();
    });
  }
}
