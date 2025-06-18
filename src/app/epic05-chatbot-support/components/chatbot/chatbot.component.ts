import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatbotMessage } from '../../model/chatbot-message.model';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  @Input() messages: ChatbotMessage[] = [];
  @Output() send = new EventEmitter<string>();
  inputText = '';

  onSubmit(): void {
    if (this.inputText.trim()) {
      this.send.emit(this.inputText.trim());
      this.inputText = '';
    }
  }
}
