import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-filters',
  templateUrl: './job-filters.component.html',
  styleUrls: ['./job-filters.component.css']
})
export class JobFiltersComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      location: [''],
      technology: [''],
      orderBy: ['']
    });
  }

  onFilter(): void {
    this.filtersChanged.emit(this.form.value);
  }

  clearFilters(): void {
    this.form.reset();
    this.onFilter();
  }
}
