import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  signupData: any;
  isAuthenticated = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signinForm.invalid) {
      return;
    }

    // Get the form values
    const { email, password } = this.signinForm.value;

    // Retrieve the stored sign-up data from local storage
    const storedSignupData = localStorage.getItem('signupData');

    if (storedSignupData) {
      this.signupData = JSON.parse(storedSignupData);

      // Check if the entered email and password match the stored sign-up data
      if (email === this.signupData.email && password === this.signupData.password) {

        // Reset the form
        this.signinForm.reset();

        // Set the authentication status to true
        this.isAuthenticated = true;

        // Navigate to the desired route within the application
        this.router.navigate(['/navbar']); // or any other desired route
      } else {
        // Invalid credentials
        alert('Invalid credentials!');
      }
    } else {
      // No sign-up data found
      alert('No sign-up data found');
    }
  }
}
