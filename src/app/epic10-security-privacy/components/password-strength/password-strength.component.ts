import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  @Input() password = '';

  get strength(): string {
    if (!this.password) return '';
    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
    const medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

    if (strong.test(this.password)) return 'strong';
    if (medium.test(this.password)) return 'medium';
    return 'weak';
  }
}
