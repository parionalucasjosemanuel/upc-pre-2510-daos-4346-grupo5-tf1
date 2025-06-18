import { Component, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-worst-rated-companies',
  templateUrl: './worst-rated-companies.component.html',
  styleUrls: ['./worst-rated-companies.component.css']
})
export class WorstRatedCompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private service: CompanyService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.companies = data.sort((a, b) => a.rating - b.rating);
    });
  }
}
