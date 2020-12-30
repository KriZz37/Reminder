import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';

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
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: '',
      password: ''
    });
  }

  onSubmit(value: Login): void {
    this.inputError = false;

    this.loginService.login(value).subscribe(user => {
      if (user) {
        localStorage.setItem('userId', user.userId.toString());
        localStorage.setItem('token', user.token);
        this.router.navigate(['/']);
      } else {
        this.inputError = true;
      }
    });
  }

}
