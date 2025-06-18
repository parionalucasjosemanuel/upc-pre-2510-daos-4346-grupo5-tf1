import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationDetailComponent } from './recommendation-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('RecommendationDetailComponent', () => {
  let component: RecommendationDetailComponent;
  let fixture: ComponentFixture<RecommendationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'new' } } }
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the detail component', () => {
    expect(component).toBeTruthy();
  });
});
