import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationFormComponent } from './recommendation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RecommendationFormComponent', () => {
  let component: RecommendationFormComponent;
  let fixture: ComponentFixture<RecommendationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationFormComponent],
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });
});
