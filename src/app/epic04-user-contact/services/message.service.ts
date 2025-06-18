import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../model/message.model';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private apiUrl = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) {}

  getAllForUser(user: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}?receiver=${user}`);
  }

  send(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
