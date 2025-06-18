import { Component, Input } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-ranking-list',
  templateUrl: './company-ranking-list.component.html',
  styleUrls: ['./company-ranking-list.component.css']
})
export class CompanyRankingListComponent {
  @Input() companies: Company[] = [];
}
