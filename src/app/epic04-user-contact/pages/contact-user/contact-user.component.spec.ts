import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactUserComponent } from './contact-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactUserComponent', () => {
  let component: ContactUserComponent;
  let fixture: ComponentFixture<ContactUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUserComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the contact user component', () => {
    expect(component).toBeTruthy();
  });
});
