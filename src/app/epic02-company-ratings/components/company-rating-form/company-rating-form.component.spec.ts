import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyRatingFormComponent } from './company-rating-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CompanyRatingFormComponent', () => {
  let component: CompanyRatingFormComponent;
  let fixture: ComponentFixture<CompanyRatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyRatingFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyRatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });
});
