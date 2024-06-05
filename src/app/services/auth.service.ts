import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtResponse, LoginRequest, RegisterRequest} from '../models/auth.model';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../models/user.model';
import {ResponseModel, ResponseStatus} from '../models/response.model';

@Injectable()
export class AuthService {
  // Base URL for the API endpoints
  private baseUrl = 'http://127.0.0.1:8000/api';

  // Constructor to inject HttpClient
  constructor(private http: HttpClient) {
    // Read JWT token from local storage if available and fetch user data
    const str = localStorage.getItem('jwt');
    if (str) {
      this.jwtToken = JSON.parse(str);
      this.getUserData();
    }
  }

  // JWT token to be used for authenticated requests
  public jwtToken?: JwtResponse;

  // BehaviorSubject to hold the current user data
  public user: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

  /**
   * Check if the user is logged in by checking if the token exists.
   * @returns boolean
   */
  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwt');
    return token != null;
  }

  /**
   * Handle user login.
   * @param model LoginRequest
   * @returns Observable<ResponseModel<JwtResponse>>
   */
  login(model: LoginRequest) {
    // Send login request to the server
    const loginRequest = this.http.post<ResponseModel<JwtResponse>>(`${this.baseUrl}/login`, model);

    loginRequest.subscribe(resp => {
      if (resp.status === ResponseStatus.SUCCESS) {
        // Save JWT token in local storage
        localStorage.setItem('jwt', JSON.stringify(resp.data));

        // Update jwtToken and fetch user data
        this.jwtToken = resp.data;
        this.getUserData();
      }
    });

    return loginRequest;
  }

  /**
   * Handle user registration.
   * @param model RegisterRequest
   * @returns Observable<ResponseModel<void>>
   */
  register(model: RegisterRequest) {
    // Send registration request to the server
    return this.http.post<ResponseModel<void>>(`${this.baseUrl}/register`, model);
  }

  /**
   * Fetch the current user's data.
   * @returns Observable<ResponseModel<UserModel>>
   */
  getUserData() {
    // Send request to get user data
    return this.http.get<ResponseModel<UserModel>>(`${this.baseUrl}/login`, {
      headers: this.createAuthHeaders()
    });
  }

  /**
   * Handle user logout.
   * @returns Observable<ResponseModel<void>>
   */
  logout() {
    // Send logout request to the server
    const req = this.http.get<ResponseModel<void>>(`${this.baseUrl}/logout`, {
      headers: this.createAuthHeaders()
    });

    // Remove JWT token from local storage
    localStorage.removeItem('jwt');
    this.jwtToken = {} as JwtResponse

    return req;
  }

  /**
   * Create HTTP headers for authenticated requests.
   * @returns HttpHeaders
   */
  public createAuthHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwtToken?.access_token}`,
      'X-Requested-With': 'XMLHttpRequest'
    });
  }
}
