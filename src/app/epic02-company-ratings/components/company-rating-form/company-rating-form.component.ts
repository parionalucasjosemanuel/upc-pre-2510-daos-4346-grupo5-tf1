import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyRating } from '../../model/company-rating.model';

@Component({
  selector: 'app-company-rating-form',
  templateUrl: './company-rating-form.component.html',
  styleUrls: ['./company-rating-form.component.css']
})
export class CompanyRatingFormComponent {
  @Output() save = new EventEmitter<CompanyRating>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      company: ['', Validators.required],
      stars: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', Validators.required],
      author: ['', Validators.required],
      date: [new Date().toISOString()]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.form.reset();
    }
  }
}
