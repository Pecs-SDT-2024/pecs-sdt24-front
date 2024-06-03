import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getArticle(id: number) {
    return this.http.get(`${this.baseUrl}/posts/${id}`, {
      headers: this.authService.createAuthHeaders()
    });
  }

  getArticles() {
    return this.http.get(`${this.baseUrl}/posts`, {
      headers: this.authService.createAuthHeaders()
    });
  }

  deleteArticle(id: number) {
    return this.http.delete(`${this.baseUrl}/posts/${id}`, {
      headers: this.authService.createAuthHeaders()
    });
  }

  createArticle(article: any) {
    return this.http.post(`${this.baseUrl}/posts`, article, {
      headers: this.authService.createAuthHeaders()
    });
  }
}
