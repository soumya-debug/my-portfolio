import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }

  isAuthenticated(): boolean {
    // Add your authentication logic here
    // For example, you can check if the user is logged in or has a valid session
    // Return true if authenticated, false otherwise
    // You can access the necessary information from local storage or session storage
    const storedSignupData = localStorage.getItem('signupData');
    return !!storedSignupData; // Return true if signupData is present, indicating the user is authenticated
  }
}
