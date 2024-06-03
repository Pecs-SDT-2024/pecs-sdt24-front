import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest, RegisterRequest, JwtResponse } from '../models/auth.model';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { ResponseModel, ResponseStatus } from '../models/response.model';

@Injectable()
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
    // Read JWT
    const str = localStorage.getItem('jwt');
    if (str) {
      this.jwtToken = JSON.parse(str);
      this.getUserData();
    }
  }

  public jwtToken?: JwtResponse;

  public user: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

  // Check if the user is logged in by checking if the token exists
  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwt');
    return token != null;
  }

  login(model: LoginRequest) {
    const loginRequest = this.http.post<ResponseModel<JwtResponse>>(`${this.baseUrl}/login`, model);
    loginRequest.subscribe(resp => {
      if (resp.status === ResponseStatus.SUCCESS) {
        //Save JWT
        localStorage.setItem('jwt', JSON.stringify(resp.data));

        this.jwtToken = resp.data;
        this.getUserData();
      }
    });

    return loginRequest;
  }

  register(model: RegisterRequest) {
    const req = this.http.post<ResponseModel<void>>(`${this.baseUrl}/register`, model);
    req.subscribe(resp => {
      if (resp.status === ResponseStatus.SUCCESS) {
        console.log("Successfully registered!")
      }
    });

    return req;
  }

  getUserData() {
    const req = this.http.get<ResponseModel<UserModel>>(`${this.baseUrl}/login`, {
      headers: this.createAuthHeaders()
    });
    req.subscribe(resp => {
      this.user.next(resp.data!);
    });

    return req;
  }

  logout() {
    const req = this.http.get<ResponseModel<void>>(`${this.baseUrl}/logout`, {
      headers: this.createAuthHeaders()
    });
    req.subscribe(resp => {
      if (resp.status === ResponseStatus.SUCCESS) {
        this.user.next(null);
      }
    });

    // Remove jwt token from the storage no matter which resp we get
    localStorage.removeItem('jwt');
    this.jwtToken = {} as JwtResponse

    return req;
  }

  public createAuthHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwtToken?.access_token}`,
      'X-Requested-With': 'XMLHttpRequest'
    });
  }
}
