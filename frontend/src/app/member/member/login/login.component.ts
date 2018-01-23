import { Component, OnInit } from '@angular/core';
import {Login} from "../../../shared/model/login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {idValidator, passWordValidator} from "./loginValidator";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {MessagesService} from "../../../shared/services/messages.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  model = new Login();
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private messagesService: MessagesService) {
  }

  ngOnInit() {
    if(this.authService.getToken()) {
      this.messagesService.error('이미 로그인되어 있습니다.');
      this.router.navigate([''])
    }
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
      this.authService.login(this.model)
        .subscribe(
          () => {},
          () => {
            this.messagesService.error('아이디나 비밀번호가 잘못되었습니다.')
          },
          () => {
            this.router.navigate([''])}
        );
    }
  }
}
