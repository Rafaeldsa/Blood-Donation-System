import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { DonationsListagemComponent } from './donations-listagem/donations-listagem.component';

const routes: Routes = [
  { path: 'create-donation', component: CreateDonationComponent },
  { path: 'list-donations', component: DonationsListagemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
