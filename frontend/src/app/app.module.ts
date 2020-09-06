import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationsListagemComponent } from './donations-listagem/donations-listagem.component';
import { DonationService } from './donation.service';

@NgModule({
  declarations: [AppComponent, DonationsListagemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],

  providers: [DonationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
