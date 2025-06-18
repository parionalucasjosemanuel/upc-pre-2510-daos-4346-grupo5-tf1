import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyRatingListComponent } from './company-rating-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CompanyRatingListComponent', () => {
  let component: CompanyRatingListComponent;
  let fixture: ComponentFixture<CompanyRatingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyRatingListComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyRatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the list component', () => {
    expect(component).toBeTruthy();
  });
});
