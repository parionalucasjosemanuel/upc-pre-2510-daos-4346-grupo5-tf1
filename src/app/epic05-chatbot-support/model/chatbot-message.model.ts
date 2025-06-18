export interface ChatbotMessage {
  sender: 'user' | 'bot';
  content: string;
  timestamp: string;
}
