import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-donations-listagem',
  templateUrl: './donations-listagem.component.html',
  styleUrls: ['./donations-listagem.component.css'],
})
export class DonationsListagemComponent implements OnInit {
  donations: Array<any>;
  isFavorited: Boolean;

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    this.listar();
    this.favoritar;
  }

  listar() {
    this.donationService
      .listar()
      .subscribe((dados) => (this.donations = dados));
  }

  favoritar() {
    this.isFavorited = false;
    if (this.isFavorited == false) {
      this.isFavorited = true;
    } else {
      this.isFavorited = false;
    }
  }
}
