import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin(): void {
    this.auth.login(this.email, this.password).subscribe(users => {
      if (users.length > 0) {
        localStorage.setItem('userId', String(users[0].id));
        this.router.navigate(['/epic01']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
