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
  registerError: boolean;
  emptyInput: boolean;

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
    this.registerError = false;
    this.emptyInput = false;

    if (value.login !== '' && value.password !== '') {
      this.registerService.register(value).subscribe(x => {
        if (x === false) {
          this.router.navigate(['/login']);
        } else {
          this.registerError = true;
        }
      });
    } else {
      this.emptyInput = true;
    }
  }

}
