import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorstRatedCompaniesComponent } from './worst-rated-companies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WorstRatedCompaniesComponent', () => {
  let component: WorstRatedCompaniesComponent;
  let fixture: ComponentFixture<WorstRatedCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorstRatedCompaniesComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WorstRatedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the worst companies component', () => {
    expect(component).toBeTruthy();
  });
});
