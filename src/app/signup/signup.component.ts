import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  signupData: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    // Store the user data in local storage
    const { username, email, password } = this.signupForm.value;
    const signupData = { username, email, password };
    localStorage.setItem('signupData', JSON.stringify(signupData));

    // Reset the form
    this.signupForm.reset();

    // Navigate to the sign-in route
    this.router.navigate(['/signin']);
  }
}
