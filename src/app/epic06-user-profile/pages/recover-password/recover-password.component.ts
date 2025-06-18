import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  email = '';

  constructor(private auth: AuthService) {}

  onRecover(): void {
    this.auth.recover(this.email).subscribe(users => {
      if (users.length > 0) {
        alert('Check your email to reset your password.');
      } else {
        alert('Email not found.');
      }
    });
  }
}
