import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class MessagesService {

  private errorSubject = new BehaviorSubject<string[]>([]);
  errors$: Observable<string[]> = this.errorSubject.asObservable();

  constructor() { }

  error(...errors: string[]) {
    this.errorSubject.next(errors);
  }

}
