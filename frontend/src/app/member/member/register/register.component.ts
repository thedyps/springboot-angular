import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../../../shared/model/user-Info";
import {AuthService} from "../../../shared/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessagesService} from "../../../shared/services/messages.service";
import {Router} from "@angular/router";
import {emailValidator, equalValidator, idValidator, passWordValidator, phoneValidator} from "./regValidator";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new UserInfo();
  regForm: FormGroup;
  idDupCheck$: Observable<boolean>;
  isIdDupCheck: boolean = false;

  constructor(private userService: UserService, private router: Router, private messagesService: MessagesService,
              private authService: AuthService) {
  }

  ngOnInit() {
    if(this.authService.getToken()) {
      this.messagesService.error('이미 로그인되어 있습니다.');
      this.router.navigate([''])
    }
    this.idDupCheck$ = this.userService.idDupCheck$;
    this.regForm = new FormGroup({
      'id': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
        idValidator()
      ]),
      'passwordWrap': new FormGroup({
        'password': new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          passWordValidator()]),
        'passwordConfirm': new FormControl('')
        }, [equalValidator('password', 'passwordConfirm')]
      ),
      'name': new FormControl('', [
        Validators.required,
      ]),
      'address': new FormControl('', [
        Validators.required,
      ]),
      'phone': new FormControl('', [
        Validators.required,
        phoneValidator()
      ]),
      'email': new FormControl('', [
        Validators.required,
        emailValidator()
      ]),
    });
    this.id.valueChanges.subscribe(
      () => this.isIdDupCheck = false
    )
  }

  get id() { return this.regForm.get('id'); }

  get passwordWrap() { return this.regForm.get('passwordWrap'); }

  get password() { return this.regForm.get('passwordWrap').get('password'); }

  get passwordConfirm() { return this.regForm.get('passwordWrap').get('passwordConfirm'); }

  get name() { return this.regForm.get('name'); }

  get address() { return this.regForm.get('address'); }

  get phone() { return this.regForm.get('phone'); }

  get email() { return this.regForm.get('email'); }


  onSubmit() {
    if(this.regForm.valid) {
      this.userService.register(this.model)
        .subscribe(
          () => {},
          () => {
            this.messagesService.error('ID가 중복되었거나 회원가입이 불가능합니다.')
          },
          () => {
            this.router.navigate(['/member/login'])}
        );
    }
  }

  checkIdDup() {
    this.isIdDupCheck = true;
    this.userService.getId(this.id.value).subscribe();
  }
}
