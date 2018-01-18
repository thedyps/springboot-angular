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

