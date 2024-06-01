import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getArticle(id: number) {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  getArticles() {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  deleteArticle(id: number) {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }

  createArticle(article: any) {
    return this.http.post(`${this.baseUrl}/posts`, article);
  }
}
