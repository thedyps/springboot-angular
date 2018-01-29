import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[codeValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CodeValidator,
    multi: true
  }]
})
export class CodeValidator implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = this.codeValidator();
  }

  validate(control: AbstractControl) {
    return this.validator(control);
  }

  codeValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const codeRe = new RegExp('^PC-[A-Z][0-9]{3}$');
      const valid = codeRe.test(control.value);
      return valid ? null : {'codeFormat': {value: control.value}};
    }
  }
}

@Directive({
  selector: '[numberValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NumberValidator,
    multi: true
  }]
})
export class NumberValidator implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = this.numberValidator();
  }

  validate(control: AbstractControl) {
    return this.validator(control);
  }

  numberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const numRe = new RegExp('^[0-9]{1,}$');
      const valid = numRe.test(control.value);
      return valid ? null : {'numberFormat': {value: control.value}};
    }
  }
}



