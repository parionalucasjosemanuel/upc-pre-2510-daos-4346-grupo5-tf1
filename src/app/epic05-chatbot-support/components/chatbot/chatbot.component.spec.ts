import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotComponent } from './chatbot.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

describe('ChatbotComponent', () => {
  let component: ChatbotComponent;
  let fixture: ComponentFixture<ChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatbotComponent],
      imports: [FormsModule, MatIconModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the chatbot component', () => {
    expect(component).toBeTruthy();
  });
});
