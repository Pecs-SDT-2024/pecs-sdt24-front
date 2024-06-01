import { TestBed } from '@angular/core/testing';
import { ArticlesService } from './articles.service';
import { HttpClient } from '@angular/common/http';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} },
      ],
    });
    service = TestBed.inject(ArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
