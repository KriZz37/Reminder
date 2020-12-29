import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from './register';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loginExists: boolean;
  inputError = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: '',
      password: ''
    });
  }

  onSubmit(value: Register): void {
    this.loginExists = false;
    this.inputError = false;

    if (value.login.length < 4 || value.password.length < 4 || /\s/.test(value.login)) {
      this.inputError = true;
    } else {
      this.registerService.register(value).subscribe(x => {
        if (x === false) {
          this.router.navigate(['/login']);
        } else {
          this.loginExists = true;
        }
      });
    }
  }

}
