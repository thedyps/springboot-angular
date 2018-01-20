import { Component, OnInit } from '@angular/core';
import {Login} from "../../../shared/model/login";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {idValidator, passWordValidator} from "./loginValidator";
import {AuthService} from "../../../shared/services/auth.service";
import {AuthToken} from "../../../shared/model/auth-token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  model = new Login();
  loginForm: FormGroup;
  token: AuthToken;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm =  new FormGroup({
      'id': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        idValidator()
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        passWordValidator()
      ])
    })
  }

  get id() { return this.loginForm.get('id'); }

  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if(this.loginForm.valid) {
      this.authService.login(this.model).subscribe();
    }
  }
}
