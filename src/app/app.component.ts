import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-app-frontend';

  router = new Router();

  ngOnInit() {
    const token = sessionStorage.getItem('auth-app-token');

    if (token) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
