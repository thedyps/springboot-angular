import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forNumber'
})
export class ForNumberPipe implements PipeTransform {

  transform(value: number, start: number, end: number): any {
    let res = [];

    for (let i = start; i <= end; i+=value) {
      res.push(i);
    }
    return res;
  }

}
