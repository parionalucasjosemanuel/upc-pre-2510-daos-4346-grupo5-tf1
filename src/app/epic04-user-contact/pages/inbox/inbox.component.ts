import { Component, OnInit } from '@angular/core';
import { Message } from '../../model/message.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  userEmail = '';
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messageService.getAllForUser(this.userEmail).subscribe(data => this.messages = data);
  }

  delete(id: number): void {
    this.messageService.delete(id).subscribe(() => this.loadMessages());
  }
}
