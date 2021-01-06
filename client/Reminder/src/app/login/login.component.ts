import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  inputError = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: '',
      password: ''
    });
  }

  onSubmit(value: Login): void {
    this.inputError = false;

    this.authService.login(value).subscribe(user => {
      if (user) {
        this.router.navigate(['/']);
      } else {
        localStorage.removeItem('currentUser');
        this.inputError = true;
      }
    });
  }

}
