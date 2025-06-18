import { Injectable } from '@angular/core';
import { ChatbotMessage } from '../model/chatbot-message.model';

@Injectable({ providedIn: 'root' })
export class ChatbotService {

  private phrases = [
    'Keep going, you are doing great!',
    'Every effort counts, don’t give up!',
    'Believe in yourself, new opportunities are coming!',
    'Your perseverance will pay off!',
    'Remember why you started!'
  ];

  generateBotReply(userInput: string): ChatbotMessage {
    const inputLower = userInput.toLowerCase();
    const isNegative = ['frustrated', 'sad', 'tired', 'lost', 'discouraged'].some(word =>
      inputLower.includes(word)
    );

    const content = isNegative
      ? this.getRandomPhrase()
      : 'I’m here to support you. Can you tell me more?';

    return {
      sender: 'bot',
      content,
      timestamp: new Date().toISOString()
    };
  }

  private getRandomPhrase(): string {
    const index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }
}
