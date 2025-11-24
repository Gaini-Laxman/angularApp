import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact-component.html',
  styleUrls: ['./contact-component.scss'],
})
export class ContactComponent {
  formModel = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    // 🔁 Replace this URL with your real backend endpoint
    const url = '/api/contact';

    this.http.post(url, this.formModel).subscribe({
      next: () => {
        this.successMessage = 'Your message has been sent. I will get back to you soon.';
        this.isSubmitting = false;
        form.resetForm();
      },
      error: () => {
        this.errorMessage = 'Something went wrong while sending your message. Please try again.';
        this.isSubmitting = false;
      },
    });
  }
}
