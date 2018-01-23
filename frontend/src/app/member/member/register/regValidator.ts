import {AbstractControl, ValidatorFn} from "@angular/forms";

export function idValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const idRe = new RegExp('^[A-Za-z]{1}[A-Za-z0-9]{3,}$');
    const valid = idRe.test(control.value);
    return valid ? null : {'idFormat': {value: control.value}};
  };
}

export function passWordValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const passwordRe = new RegExp('^([a-zA-Z0-9!@*#]{8,15})$')
    const valid = passwordRe.test(control.value);
    return valid ? null : {'passwordFormat': {value: control.value}};
  };
}

export function equalValidator(name1: string, name2: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const c1 = control.get(name1);
    const c2 = control.get(name2);
    const valid = c1.value === c2.value;
    return valid ? null : {'equal': {value: 'false'}};
  };
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const phoneRe = new RegExp('^(01[0-9]{1}-[0-9]{3,4}-[0-9]{4})$')
    const valid = phoneRe.test(control.value);
    return valid ? null : {'phoneFormat': {value: control.value}};
  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const emailRe = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$')
    const valid = emailRe.test(control.value);
    return valid ? null : {'emailFormat': {value: control.value}};
  };
}

