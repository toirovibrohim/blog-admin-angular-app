import { ApiService } from './api.service';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PostService {
  constructor(private http: HttpClient,
              private api: ApiService) {
  }

  private postApiGet(value) {
    return this.api.get('/posts/' + value);
  }

  getAllPosts() {
    return this.postApiGet('');
  }

  getPost(id: number) {
    return this.postApiGet(id);
  }

  savePost(url, value) {
    return this.api.put('/posts/' + url, value);
  }

  addPost(value) {
    return this.api.post('/posts/', value);
  }

  deletePost(id: number) {
    return this.api.delete('/posts/' + id);
  }
}
