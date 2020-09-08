import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  donorUrl = 'http://localhost:3000/donors';
  constructor(private http: HttpClient) {}

  getDonors() {
    return this.http.get<any[]>(`${this.donorUrl}.json`);
  }

  login(donor) {
    return this.http.post(`${this.donorUrl}`, donor);
  }

  create(donor) {
    return this.http.post(`${this.donorUrl}`, donor);
  }
}
