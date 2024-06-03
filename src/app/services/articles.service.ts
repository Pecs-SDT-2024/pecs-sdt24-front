import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  // Base URL for the API endpoints
  private baseUrl = 'http://127.0.0.1:8000/api';

  // Constructor to inject HttpClient and AuthService
  constructor(private http: HttpClient, private authService: AuthService) { }

  /**
   * Fetch a specific article by its ID.
   *
   * @param id - The ID of the article to be retrieved.
   * @returns Observable containing the requested article.
   */
  getArticle(id: number) {
    // Send GET request to fetch the article by ID with authorization headers
    return this.http.get(`${this.baseUrl}/posts/${id}`, {
      headers: this.authService.createAuthHeaders()
    });
  }

  /**
   * Fetch all articles.
   *
   * @returns Observable containing the list of all articles.
   */
  getArticles() {
    // Send GET request to fetch all articles with authorization headers
    return this.http.get(`${this.baseUrl}/posts`, {
      headers: this.authService.createAuthHeaders()
    });
  }

  /**
   * Delete a specific article by its ID.
   *
   * @param id - The ID of the article to be deleted.
   * @returns Observable indicating the deletion result.
   */
  deleteArticle(id: number) {
    // Send DELETE request to delete the article by ID with authorization headers
    return this.http.delete(`${this.baseUrl}/posts/${id}`, {
      headers: this.authService.createAuthHeaders()
    });
  }

  /**
   * Create a new article.
   *
   * @param article - The article data to be created.
   * @returns Observable containing the created article.
   */
  createArticle(article: any) {
    // Send POST request to create a new article with authorization headers
    return this.http.post(`${this.baseUrl}/posts`, article, {
      headers: this.authService.createAuthHeaders()
    });
  }
}
