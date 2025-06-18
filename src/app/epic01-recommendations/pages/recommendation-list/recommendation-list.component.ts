import { Component, OnInit } from '@angular/core';
import { Recommendation } from '../../model/recommendation.model';
import { RecommendationService } from '../../services/recommendation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.css']
})
export class RecommendationListComponent implements OnInit {
  recommendations: Recommendation[] = [];

  constructor(private recommendationService: RecommendationService, private router: Router) {}

  ngOnInit(): void {
    this.loadRecommendations();
  }

  loadRecommendations(): void {
    this.recommendationService.getAll().subscribe(data => this.recommendations = data);
  }

  edit(id: number): void {
    this.router.navigate(['/recommendations', id]);
  }

  delete(id: number): void {
    this.recommendationService.delete(id).subscribe(() => this.loadRecommendations());
  }

  create(): void {
    this.router.navigate(['/recommendations/new']);
  }
}
