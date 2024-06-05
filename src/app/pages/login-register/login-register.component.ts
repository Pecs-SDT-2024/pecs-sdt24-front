import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { LoginRequest, RegisterRequest } from "../../models/auth.model";
import { HttpErrorResponse } from "@angular/common/http";
import { ResponseModel, ResponseStatus } from "../../models/response.model";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  // Define login and register form groups
  loginForm: FormGroup;
  registerForm: FormGroup;

  // Constructor to inject necessary services: AuthService, Router, FormBuilder
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    // Initialize the login form with validation rules
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    // Initialize the register form with validation rules
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  /**
   * Logout the user when opening this page.
   * This method is automatically called by Angular when the component is initialized.
   */
  ngOnInit(): void {
    // Logout the user when the component is initialized
    this.authService.logout().subscribe({
      next: () => {
        // Successful logout
      },
      error: (error: HttpErrorResponse) => {
        // Handle logout error
        const backendError: ResponseModel<void> = error.error;
        if (backendError.status === ResponseStatus.ERROR) {
          this.errorMessage = backendError.message;
        }
      }
    });
  }

  /**
   * The server-side error message, if any.
   */
  protected errorMessage?: string;

  /**
   * Handle user login.
   * This method is called when the user submits the login form.
   */
  login() {
    if (this.loginForm.valid) {
      // If the login form is valid, proceed with login
      console.log('Login form submitted', this.loginForm.value);

      // Call the login method from AuthService
      this.authService.login(this.loginForm.value as LoginRequest).subscribe({
        next: () => {
          // On successful login, navigate to the home page
          this.router.navigate(['']);
        },
        error: (error: HttpErrorResponse) => {
          // Handle login error
          const backendError: ResponseModel<void> = error.error;
          if (backendError.status === ResponseStatus.ERROR) {
            this.errorMessage = backendError.message;
          }
        }
      });
    } else {
      // If the login form is invalid, log an error message
      console.log('Login form is invalid');
    }
  }

  /**
   * Handle user registration.
   * This method is called when the user submits the register form.
   */
  register() {
    if (this.registerForm.valid) {
      // If the register form is valid, proceed with registration
      console.log('Register form submitted', this.registerForm.value);

      // Call the register method from AuthService
      this.authService.register(this.registerForm.value as RegisterRequest).subscribe({
        next: () => {
          // On successful registration, the user might be automatically logged in or directed to log in
        },
        error: (error: HttpErrorResponse) => {
          // Handle registration error
          const backendError: ResponseModel<void> = error.error;
          if (backendError.status === ResponseStatus.ERROR) {
            this.errorMessage = backendError.message;
          }
        }
      });
    } else {
      // If the register form is invalid, log an error message
      console.log('Register form is invalid');
    }
  }
}
