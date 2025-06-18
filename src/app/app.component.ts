import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TuChambaMásCercana';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  /**
   * Muestra el toolbar y el footer solo si no estás en la vista de login/registro/recuperación.
   */
  showToolbar(): boolean {
    const hiddenRoutes = ['/', '/login', '/register', '/recover-password'];
    return !hiddenRoutes.includes(this.currentRoute);
  }
}
