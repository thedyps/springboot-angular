import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../shared/services/messages.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]>;

  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.errors$ = this.messageService.errors$;
  }

  close() {
    this.messageService.error();
  }
}
