import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private languageService: LanguageService) {
    this.languageService.loadDefaultLangsAndStyles();
  }
  public onSwitchLanguages() {
    this.languageService.switchLanguages();
  }

  ngOnInit(): void {}
}
