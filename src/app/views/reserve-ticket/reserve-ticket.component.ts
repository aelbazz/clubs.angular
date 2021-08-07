import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-ticket',
  templateUrl: './reserve-ticket.component.html',
  styleUrls: ['./reserve-ticket.component.scss'],
})
export class ReserveTicketComponent implements OnInit {
  currentStep = 2;
  constructor() {}

  ngOnInit(): void {}
}
