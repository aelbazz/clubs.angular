import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeroComponent } from './views/home/hero/hero.component';
import { ReserveTicketComponent } from './views/reserve-ticket/reserve-ticket.component';
import { PaymentComponent } from './views/reserve-ticket/payment/payment.component';
import { ReviewComponent } from './views/reserve-ticket/review/review.component';
import { InfoComponent } from './views/reserve-ticket/info/info.component';
import { ChooseTicketComponent } from './views/reserve-ticket/choose-ticket/choose-ticket.component';
import { SelectClubComponent } from './views/reserve-ticket/select-club/select-club.component';
import { ContactusComponent } from './views/home/contactus/contactus.component';
import { TeamMatchesComponent } from './views/home/team-matches/team-matches.component';
import { AboutTeamComponent } from './views/home/about-team/about-team.component';
import { SponsorsComponent } from './views/home/sponsors/sponsors.component';
import { ChampionshipsComponent } from './views/home/championships/championships.component';
import { RouterModule } from '@angular/router';

export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, HomeComponent, HeroComponent, ReserveTicketComponent, PaymentComponent, ReviewComponent, InfoComponent, ChooseTicketComponent, SelectClubComponent, ContactusComponent, TeamMatchesComponent, AboutTeamComponent, SponsorsComponent, ChampionshipsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
