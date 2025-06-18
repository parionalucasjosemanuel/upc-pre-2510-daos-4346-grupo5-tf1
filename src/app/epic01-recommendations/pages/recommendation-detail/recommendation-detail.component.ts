import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendationService } from '../../services/recommendation.service';
import { Recommendation } from '../../model/recommendation.model';

@Component({
  selector: 'app-recommendation-detail',
  templateUrl: './recommendation-detail.component.html',
  styleUrls: ['./recommendation-detail.component.css']
})
export class RecommendationDetailComponent implements OnInit {
  recommendation?: Recommendation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecommendationService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'new') {
      this.recommendation = undefined;
    } else {
      this.service.getById(+id!).subscribe(data => this.recommendation = data);
    }
  }

  onSave(rec: Recommendation): void {
    if (rec.id) {
      this.service.update(rec.id, rec).subscribe(() => this.router.navigate(['/recommendations']));
    } else {
      this.service.create(rec).subscribe(() => this.router.navigate(['/recommendations']));
    }
  }
}
