import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BestRatedCompaniesComponent } from './best-rated-companies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BestRatedCompaniesComponent', () => {
  let component: BestRatedCompaniesComponent;
  let fixture: ComponentFixture<BestRatedCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestRatedCompaniesComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BestRatedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the top companies component', () => {
    expect(component).toBeTruthy();
  });
});
