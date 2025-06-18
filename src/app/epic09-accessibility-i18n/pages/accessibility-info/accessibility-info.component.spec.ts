import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessibilityInfoComponent } from './accessibility-info.component';

describe('AccessibilityInfoComponent', () => {
  let component: AccessibilityInfoComponent;
  let fixture: ComponentFixture<AccessibilityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessibilityInfoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessibilityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the accessibility info component', () => {
    expect(component).toBeTruthy();
  });
});
