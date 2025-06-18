import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyRankingListComponent } from './company-ranking-list.component';

describe('CompanyRankingListComponent', () => {
  let component: CompanyRankingListComponent;
  let fixture: ComponentFixture<CompanyRankingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyRankingListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyRankingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ranking list component', () => {
    expect(component).toBeTruthy();
  });
});
