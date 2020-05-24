import { ApiService } from './api.service';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {
  constructor(private http: HttpClient,
              private api: ApiService) {
  }

  private userApiGet(value) {
    return this.api.get('/users/' + value);
  }

  getAllUsers() {
    return this.userApiGet('');
  }

  getUser(id: number) {
    return this.userApiGet(id);
  }

  saveUser(url, value) {
    return this.api.put('/users/' + url, value);
  }

  deleteUser(id: number) {
    return this.api.delete('/users/' + id);
  }
}
