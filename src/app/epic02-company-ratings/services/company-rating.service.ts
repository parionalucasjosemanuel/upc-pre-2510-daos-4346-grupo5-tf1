import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyRating } from '../model/company-rating.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyRatingService {
  private apiUrl = 'http://localhost:3000/companyRatings';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CompanyRating[]> {
    return this.http.get<CompanyRating[]>(this.apiUrl);
  }

  create(rating: CompanyRating): Observable<CompanyRating> {
    return this.http.post<CompanyRating>(this.apiUrl, rating);
  }
}
