import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {LoginRequest, RegisterRequest} from "../../models/auth.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ResponseModel, ResponseStatus} from "../../models/response.model";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit  {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private authService : AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  /**
   * Logout the user when opening this page.
   */
  ngOnInit(): void {
    // Handle login logic
    console.log('Logout submitted', this.registerForm.value);

    this.authService.logout().subscribe({
      error: (error: HttpErrorResponse) => {
        const backendError: ResponseModel<void> = error.error;
        if (backendError.status === ResponseStatus.ERROR) {
          this.errorMessage = backendError.message;
        }
      },
      next: data => {
        // Request successful, navigate to home page
        this.router.navigate(['login-register']);
      }
    });
  }

  /**
   * The server-side error message, if any.
   */
  protected errorMessage?: string;

  login() {
    if (this.loginForm.valid) {
      // Handle login logic
      console.log('Login form submitted', this.registerForm.value);

      this.authService.login(this.loginForm.value as LoginRequest).subscribe({
        error: (error: HttpErrorResponse) => {
          const backendError: ResponseModel<void> = error.error;
          if (backendError.status === ResponseStatus.ERROR) {
            this.errorMessage = backendError.message;
          }
        },
        next: data => {
          // Request successful, navigate to home page
          this.router.navigate(['']);
        }
      });

    } else {
      console.log('Login form is invalid');
    }
  }

  register() {
    if (this.registerForm.valid) {
      // Handle registration logic
      console.log('Register form submitted', this.registerForm.value);

      this.authService.register(this.registerForm.value as RegisterRequest).subscribe({
        error: (error: HttpErrorResponse) => {
          const backendError: ResponseModel<void> = error.error;
          if (backendError.status === ResponseStatus.ERROR) {
            this.errorMessage = backendError.message;
          }
        },
        next: () => {
          // Request successful, waiting for a login
        }
      });

    } else {
      console.log('Register form is invalid');
    }
  }
}
