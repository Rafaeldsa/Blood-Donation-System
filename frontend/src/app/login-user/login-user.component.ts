import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  formLogin;
  donors: Array<any>;
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [''],
      senha: [''],
    });
    this.getDonors();
  }

  getDonors() {
    this.loginService.getDonors().subscribe((dados) => {
      this.donors = dados;
    });
  }

  login() {
    let checkLogin = (user) => {
      return user.email === this.formLogin.value.email;
    };
    const userLogado = this.donors.filter(checkLogin);
    console.log(userLogado);
  }
}
