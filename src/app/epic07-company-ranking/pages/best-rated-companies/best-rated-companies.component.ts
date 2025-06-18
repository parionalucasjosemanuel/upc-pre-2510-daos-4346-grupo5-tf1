import { Component, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-best-rated-companies',
  templateUrl: './best-rated-companies.component.html',
  styleUrls: ['./best-rated-companies.component.css']
})
export class BestRatedCompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private service: CompanyService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.companies = data.sort((a, b) => b.rating - a.rating);
    });
  }
}
