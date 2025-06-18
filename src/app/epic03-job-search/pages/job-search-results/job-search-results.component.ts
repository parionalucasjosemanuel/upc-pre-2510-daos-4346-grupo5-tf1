import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-search-results',
  templateUrl: './job-search-results.component.html',
  styleUrls: ['./job-search-results.component.css']
})
export class JobSearchResultsComponent implements OnInit {
  allJobs: Job[] = [];
  filteredJobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getAll().subscribe(jobs => {
      this.allJobs = jobs;
      this.filteredJobs = jobs;
    });
  }

  applyFilters(filters: any): void {
    let result = [...this.allJobs];

    if (filters.location) {
      result = result.filter(job => job.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.technology) {
      result = result.filter(job =>
        job.technologies.some(tech => tech.toLowerCase().includes(filters.technology.toLowerCase()))
      );
    }

    if (filters.orderBy) {
      result = result.sort((a, b) =>
        filters.orderBy === 'rating'
          ? b.rating - a.rating
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    this.filteredJobs = result;
  }
}
