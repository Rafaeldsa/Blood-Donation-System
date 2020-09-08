import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create-donor',
  templateUrl: './create-donor.component.html',
  styleUrls: ['./create-donor.component.css'],
})
export class CreateDonorComponent implements OnInit {
  formCadastroDonor;
  constructor(private loginService: LoginService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formCadastroDonor = this.fb.group({
      nome: [''],
      tipo: [''],
      idade: [0],
      email: [''],
      senha: [''],
    });
  }
  cadastro() {
    this.loginService.create(this.formCadastroDonor.value).subscribe(
      (succcess) => console.log('sucesso'),
      (error) => console.log(error)
    );
  }
}
