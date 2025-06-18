import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportChatComponent } from './support-chat.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SupportChatComponent', () => {
  let component: SupportChatComponent;
  let fixture: ComponentFixture<SupportChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportChatComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SupportChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the support chat component', () => {
    expect(component).toBeTruthy();
  });
});
