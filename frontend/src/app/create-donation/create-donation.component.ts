import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.css'],
})
export class CreateDonationComponent implements OnInit {
  formCadastro;

  constructor(
    private donationService: DonationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      doador: [''],
      tipo: [''],
      cidade: [''],
      estado: [''],
      data: [''],
    });
  }
  cadastro() {
    this.donationService.create(this.formCadastro.value).subscribe(
      (succcess) => alert('sucesso'),
      (error) => alert(error)
    );
  }
}
