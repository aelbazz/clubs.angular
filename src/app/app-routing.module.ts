import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { MyTicketsComponent } from 'src/app/views/my-tickets/my-tickets.component';
import { ChooseTicketComponent } from 'src/app/views/reserve-ticket/choose-ticket/choose-ticket.component';
import { InfoComponent } from 'src/app/views/reserve-ticket/info/info.component';
import { PaymentComponent } from 'src/app/views/reserve-ticket/payment/payment.component';
import { ReserveTicketComponent } from 'src/app/views/reserve-ticket/reserve-ticket.component';
import { ReviewComponent } from 'src/app/views/reserve-ticket/review/review.component';
import { SelectClubComponent } from 'src/app/views/reserve-ticket/select-club/select-club.component';
import { StatusComponent } from 'src/app/views/reserve-ticket/status/status.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        data: { breadcrumb: 'Home' },
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'reserve-ticket',
        component: ReserveTicketComponent,
        children: [
          {
            path: '',
            redirectTo: 'select-club',
            pathMatch: 'full',
          },
          {
            path: 'select-club',
            data: { step: 1 },
            component: SelectClubComponent,
          },
          {
            path: 'choose-ticket',
            data: { step: 2 },
            component: ChooseTicketComponent,
          },
          {
            path: 'info',
            data: { step: 3 },
            component: InfoComponent,
          },
          {
            path: 'review',
            data: { step: 4 },
            component: ReviewComponent,
          },
          {
            path: 'payment',
            data: { step: 5 },
            component: PaymentComponent,
          },
        ],
      },
      {
        path: 'reserve-status',
        component: StatusComponent,
      },
      {
        path: 'mytickets',
        component: MyTicketsComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
