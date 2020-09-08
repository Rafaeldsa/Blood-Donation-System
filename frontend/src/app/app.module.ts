import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationsListagemComponent } from './donations-listagem/donations-listagem.component';
import { DonationService } from './donation.service';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationsListagemComponent,
    CreateDonationComponent,
    LoginUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [DonationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
