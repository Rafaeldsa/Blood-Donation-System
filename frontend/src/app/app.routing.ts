import { Routes, RouterModule } from '@angular/router';

import { LoginUserComponent } from './login-user/login-user.component';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { CreateDonorComponent } from './create-donor/create-donor.component';
import { DonationsListagemComponent } from './donations-listagem/donations-listagem.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'create-donation', component: CreateDonationComponent },
  { path: 'create-donor', component: CreateDonorComponent },
  { path: 'list-donations', component: DonationsListagemComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  APP_ROUTES
);
