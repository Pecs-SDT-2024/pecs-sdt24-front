import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // Constructor to inject AuthService and Router
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Determines whether a route can be activated.
   *
   * @returns boolean - Returns true if the user is logged in, otherwise redirects to login page and returns false.
   */
  canActivate(): boolean {
    // Check if the user is logged in
    if (!this.authService.isLoggedIn()) {
      // If the user is not logged in, navigate to the login-register page
      this.router.navigate(['/login-register']);
      return false;
    }
    // If the user is logged in, allow access to the route
    return true;
  }
}
