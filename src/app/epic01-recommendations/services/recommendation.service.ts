import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recommendation } from '../model/recommendation.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private apiUrl = 'http://localhost:3000/recommendations';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Recommendation[]> {
    return this.http.get<Recommendation[]>(this.apiUrl);
  }

  getById(id: number): Observable<Recommendation> {
    return this.http.get<Recommendation>(`${this.apiUrl}/${id}`);
  }

  create(recommendation: Recommendation): Observable<Recommendation> {
    return this.http.post<Recommendation>(this.apiUrl, recommendation);
  }

  update(id: number, recommendation: Recommendation): Observable<Recommendation> {
    return this.http.put<Recommendation>(`${this.apiUrl}/${id}`, recommendation);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
