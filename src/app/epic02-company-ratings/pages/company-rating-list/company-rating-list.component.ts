import { Component, OnInit } from '@angular/core';
import { CompanyRatingService } from '../../services/company-rating.service';
import { CompanyRating } from '../../model/company-rating.model';

@Component({
  selector: 'app-company-rating-list',
  templateUrl: './company-rating-list.component.html',
  styleUrls: ['./company-rating-list.component.css']
})
export class CompanyRatingListComponent implements OnInit {
  ratings: CompanyRating[] = [];

  constructor(private ratingService: CompanyRatingService) {}

  ngOnInit(): void {
    this.ratingService.getAll().subscribe(data => this.ratings = data);
  }

  onRatingSaved(rating: CompanyRating): void {
    this.ratings.push(rating);
  }
}
