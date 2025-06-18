import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private http: HttpClient) {}

  sendEmailNotification(to: string, message: string): Observable<any> {
    const url = 'https://formspree.io/f/xgegjdyg'; // endpoint demo real de Formspree

    return this.http.post(url, {
      email: to,
      message
    });
  }
}
