import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobSearchResultsComponent } from './job-search-results.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobSearchResultsComponent', () => {
  let component: JobSearchResultsComponent;
  let fixture: ComponentFixture<JobSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobSearchResultsComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(JobSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search results component', () => {
    expect(component).toBeTruthy();
  });
});
