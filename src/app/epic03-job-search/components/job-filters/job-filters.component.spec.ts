import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobFiltersComponent } from './job-filters.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('JobFiltersComponent', () => {
  let component: JobFiltersComponent;
  let fixture: ComponentFixture<JobFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobFiltersComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(JobFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the filters component', () => {
    expect(component).toBeTruthy();
  });
});
