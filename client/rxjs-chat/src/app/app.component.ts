import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

import { ChatService } from 'src/services/chat.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message: string;
  messages: string[] = [];
  secretCode: string;
  endConversationCode: string;
  
  
  
  constructor(private chatService:ChatService){
    this.secretCode = 'DONT TELL';
    this.endConversationCode = 'BYE BYE';

  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        const currentTime = moment().format('hh:mm:ss a');
        const messageWithTimestamp = `${currentTime}: ${message}`;
        this.messages.push(messageWithTimestamp);
      });
  }



}


