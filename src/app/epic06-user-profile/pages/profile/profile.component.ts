import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user?: User;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const id = Number(localStorage.getItem('userId'));
    this.auth.getById(id).subscribe(u => this.user = u);
  }

  onSave(updatedUser: User): void {
    this.auth.update(updatedUser).subscribe(u => this.user = u);
  }
}
