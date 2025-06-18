import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageFormComponent } from './message-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('MessageFormComponent', () => {
  let component: MessageFormComponent;
  let fixture: ComponentFixture<MessageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });
});
