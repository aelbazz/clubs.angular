import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/language/language.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private languageService: LanguageService,public router:Router) {
    this.languageService.loadDefaultLangsAndStyles();
  }
  onReserveTicket() {
    this.router.navigate(['reserve-ticket/select-club']) 
  }
  public onSwitchLanguages() {
    this.languageService.switchLanguages();
  }

  ngOnInit(): void {}
}
