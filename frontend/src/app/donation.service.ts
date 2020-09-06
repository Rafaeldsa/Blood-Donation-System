import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  donationUrl = 'http://localhost:3000/donations.json';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(`${this.donationUrl}`);
  }
}
