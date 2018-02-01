import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {Observable} from "rxjs/Observable";
import {UserInfo} from "../../../shared/model/user-Info";
import {emailValidator, equalValidator, passWordValidator, phoneValidator} from "../register/regValidator";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessagesService} from "../../../shared/services/messages.service";
import {AuthService} from "../../../shared/services/auth.service";
import {Login} from "../../../shared/model/login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model = new UserInfo();
  regForm: FormGroup;
  userInfo$: Observable<UserInfo>;
  pwUptCheck: boolean = false;

  constructor(private authService: AuthService, private userService: UserService,
              private messagesService: MessagesService, private router: Router) {
  }

  ngOnInit() {
    this.userInfo$ = this.userService.userInfo$;
    this.userService.getUserInfo().subscribe(
      data => {
      this.model.id = data.id;
      this.model.address = data.address;
      this.model.email = data.email;
      this.model.name = data.name;
      this.model.phone = data.phone;
      this.model.pw = '';
    });
    this.regForm = new FormGroup({
      'id': new FormControl({value: this.model.id, disabled: true}),
      'name': new FormControl(this.model.name, [
        Validators.required,
      ]),
      'address': new FormControl( this.model.address, [
        Validators.required,
      ]),
      'phone': new FormControl(this.model.phone, [
        Validators.required,
        phoneValidator()
      ]),
      'email': new FormControl(this.model.email, [
        Validators.required,
        emailValidator()
      ]),
    });
  }

  get id() { return this.regForm.get('id'); }

  get passwordWrap() { return this.regForm.get('passwordWrap'); }

  get password() { return this.regForm.get('passwordWrap').get('password'); }

  get passwordConfirm() { return this.regForm.get('passwordWrap').get('passwordConfirm'); }

  get name() { return this.regForm.get('name'); }

  get address() { return this.regForm.get('address'); }

  get phone() { return this.regForm.get('phone'); }

  get email() { return this.regForm.get('email'); }

  get beforePassword() {
    return this.regForm.get('beforePassword');
  }

  showPwUpt() {
    this.regForm.addControl('beforePassword',
      new FormControl('', [ Validators.minLength(8), passWordValidator()]));
    this.regForm.addControl('passwordWrap', new FormGroup({
        'password': new FormControl(this.model.pw,[
          Validators.minLength(8),
          passWordValidator()]),
        'passwordConfirm': new FormControl('')
      }, [equalValidator('password', 'passwordConfirm')]
    ));
    this.pwUptCheck = true;
  }

  onSubmit() {
    if(!this.pwUptCheck) {
      if(this.regForm.valid) {
        this.userService.updateUserInfo(this.model)
          .subscribe(
            () => {},
            () => {this.messagesService.error('회원 정보 수정이 불가능합니다.');},
            () => {location.reload()}
          )
      } else {
        this.messagesService.error('회원 정보 수정이 불가능합니다.');
      }
    } else {
      if(this.regForm.valid) {
        let login = new Login();
        login.id = this.id.value;
        login.pw = this.beforePassword.value;
        this.authService.isExist(login)
          .subscribe(
            () => {},
            () => {this.messagesService.error('회원 정보 수정이 불가능합니다.', '기본 패스워드가 잘못되었습니다.');},
            () => {
              this.userService.updateUserInfo(this.model)
                .subscribe(
                  () => {},
                  () => {this.messagesService.error('회원 정보 수정이 불가능합니다.');},
                  () => {
                    this.userService.updateUserPw(this.model)
                      .subscribe(
                        () => {},
                        () => {this.messagesService.error('회원 정보 수정이 불가능합니다.');},
                        () => {
                          this.pwUptCheck = false;
                          this.authService.logOut();
                          this.router.navigate(['/member/login']);
                        }
                      )
                  }
                )
            }
          )
      } else {
        this.messagesService.error('회원 정보 수정이 불가능합니다.');
      }
    }
  }
}
