import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoService } from './crypto.service';
import { Observable, map } from 'rxjs';
import { User } from '../../epic06-user-profile/model/user.model';

@Injectable({ providedIn: 'root' })
export class SecureAuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private crypto: CryptoService) {}

  register(user: User): Observable<User> {
    const encrypted = {
      ...user,
      password: this.crypto.encrypt(user.password)
    };
    return this.http.post<User>(this.apiUrl, encrypted);
  }

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`).pipe(
      map(users => {
        const found = users[0];
        if (found) {
          const decrypted = this.crypto.decrypt(found.password);
          if (decrypted === password) return found;
        }
        return null;
      })
    );
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  recover(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`);
  }
}
