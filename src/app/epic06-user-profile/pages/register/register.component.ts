import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}

  onSave(user: User): void {
    this.auth.register(user).subscribe(() => {
      alert('Registered successfully!');
      this.router.navigate(['/login']);
    });
  }
}
