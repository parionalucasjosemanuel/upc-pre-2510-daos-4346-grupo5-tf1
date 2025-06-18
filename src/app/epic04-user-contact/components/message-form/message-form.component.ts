import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../../model/message.model';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  @Output() send = new EventEmitter<Message>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sender: ['', Validators.required],
      receiver: ['', Validators.required],
      content: ['', Validators.required],
      timestamp: [new Date().toISOString()]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.send.emit(this.form.value);
      this.form.reset();
    }
  }
}
