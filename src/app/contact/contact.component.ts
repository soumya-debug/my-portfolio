import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup; // Add '!' to indicate it will be initialized later
  isSubmitted: boolean = false;
  isSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('Submitting form...');
    console.log('Form value:', this.contactForm.value);
    if (this.contactForm.valid) {
      // Perform form submission logic here
      // For demonstration purposes, let's assume the submission is successful
      this.isSubmitted = true;
      this.isSuccess = true;
    } else {
      this.isSubmitted = true;
      this.isSuccess = false;
    }
  }
}
