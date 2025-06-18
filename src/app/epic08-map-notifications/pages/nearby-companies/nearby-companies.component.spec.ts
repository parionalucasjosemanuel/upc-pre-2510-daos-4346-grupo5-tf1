import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NearbyCompaniesComponent } from './nearby-companies.component';

describe('NearbyCompaniesComponent', () => {
  let component: NearbyCompaniesComponent;
  let fixture: ComponentFixture<NearbyCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NearbyCompaniesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create nearby companies component', () => {
    expect(component).toBeTruthy();
  });
});
