import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recommendation } from '../../model/recommendation.model';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.css']
})
export class RecommendationFormComponent implements OnInit {
  @Input() initialData?: Recommendation;
  @Output() save = new EventEmitter<Recommendation>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.initialData?.id],
      title: [this.initialData?.title || '', Validators.required],
      description: [this.initialData?.description || '', Validators.required],
      author: [this.initialData?.author || '', Validators.required],
      date: [this.initialData?.date || '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
