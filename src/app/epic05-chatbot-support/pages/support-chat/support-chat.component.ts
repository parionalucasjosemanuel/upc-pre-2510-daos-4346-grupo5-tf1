import { Component } from '@angular/core';
import { ChatbotMessage } from '../../model/chatbot-message.model';
import { ChatbotService } from '../../services/chatbot.service';

@Component({
  selector: 'app-support-chat',
  templateUrl: './support-chat.component.html',
  styleUrls: ['./support-chat.component.css']
})
export class SupportChatComponent {
  messages: ChatbotMessage[] = [];

  constructor(private chatbotService: ChatbotService) {}

  onSend(messageText: string): void {
    const userMessage: ChatbotMessage = {
      sender: 'user',
      content: messageText,
      timestamp: new Date().toISOString()
    };

    this.messages.push(userMessage);

    const botReply = this.chatbotService.generateBotReply(messageText);
    setTimeout(() => this.messages.push(botReply), 500);
  }
}
