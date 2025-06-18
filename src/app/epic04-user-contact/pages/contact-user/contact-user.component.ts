import { Component } from '@angular/core';
import { Message } from '../../model/message.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contact-user',
  templateUrl: './contact-user.component.html',
  styleUrls: ['./contact-user.component.css']
})
export class ContactUserComponent {
  constructor(private messageService: MessageService) {}

  onSend(message: Message): void {
    this.messageService.send(message).subscribe(() => {
      alert('Message sent successfully!');
    });
  }
}
