import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CategoryService {
  constructor(private http: HttpClient,
              private api: ApiService) {}


  private categoryApiGet(value) {
    return this.api.get('/categories/' + value);
  }

  getAllCategories() {
    return this.categoryApiGet('');
  }

  getCategory(id: number) {
    return this.categoryApiGet(id);
  }

  saveCategory(id, value) {
    return this.api.put('/categories/' + id, value);
  }

  deleteCategory(id: number) {
    return this.api.delete('/categories/' + id);
  }
}
