import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;

  signIn(): boolean {
    // Perform authentication logic here
    // Set the isAuthenticated flag accordingly
    this.isAuthenticated = true;
    return this.isAuthenticated;
  }

  signOut(): void {
    // Perform sign out logic here
    // Set the isAuthenticated flag accordingly
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
