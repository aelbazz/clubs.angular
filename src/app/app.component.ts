import { Component, Inject } from '@angular/core';
import { ApiService } from './core/api-services/api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public matches: any;
  public teamProfile: any;
  public loadingMatches: boolean = false;
  public loadingTeamProfile: boolean = false;

  title = 'elbaz-angular-template';
  constructor(public apiService: ApiService,
    @Inject(Location) private readonly location: Location){
    this.getTeamId();
    this.getTeamProfile();
    this.getMatches();    
  }

  getMatches() {
    this.loadingMatches = true;
    this.apiService.getMatches().subscribe(
      res => {
        this.loadingMatches = false;
        this.matches = res;
      }, err => {
        this.loadingMatches = false;
      }
    );
  }

  getTeamId() {
    localStorage.setItem('TEAM_ID', '463b4a44-b13c-4ee8-9c97-02d1be9d7c38')
    if(location.origin.indexOf('alfaisaly') > -1){
      localStorage.setItem('TEAM_ID', '007684bf-e762-4d30-bdaa-a27d7e6f2a48')
    } else if(location.origin.indexOf('alhazim') > -1){
      localStorage.setItem('TEAM_ID', '929df13d-d6a6-404c-8b2c-af51b0330e9b')
    } else if(location.origin.indexOf('alfaiha') > -1){
      localStorage.setItem('TEAM_ID', '463b4a44-b13c-4ee8-9c97-02d1be9d7c38')
    } else if(location.origin.indexOf('ettifaq') > -1){
      localStorage.setItem('TEAM_ID', '0e3753ab-28d7-4131-9c99-82d1c2bc6e11')
    } 
  }

  getTeamProfile() {
    this.apiService.getTeamProfile().subscribe(
      res => {
        this.loadingTeamProfile = false;
        this.teamProfile = res;
      }, err => {
        this.loadingTeamProfile = false;
      }
    );
  }
}
