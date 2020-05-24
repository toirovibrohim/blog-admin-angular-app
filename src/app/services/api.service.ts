import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ApiService {
  constructor(private http: HttpClient) {}

  public url: string = 'http://localhost:3000/api';

  get(address) {
    console.log('Get', this.url + address);
    return this.http.get(this.url + address).toPromise();
  }

  post(address, value) {
    return this.http.post(this.url + address, value).toPromise();
  }

  put(address, value) {
    console.log('Put', this.url + address, 'Value: ', value);
    return this.http.put(this.url + address, value).toPromise();
  }

  delete(address) {
    console.log('Delete', this.url + address);
    return this.http.delete(this.url + address).toPromise();
  }
}
