import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  sendEmail() {
    const form = document.getElementById('my-contact-form') as HTMLFormElement;
    emailjs.sendForm('service_yylekov', 'template_bbemuaq', form, 'B-hHq1CL19BH-zPlI')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        //send success message
        alert('Email sent!');
        form.reset(); // Reset the form input fields

      }, (error) => {
        console.error('Email sending failed:', error);
        //send error message
        alert('Failed to send email. Please try again later.');
      });
  }
}
