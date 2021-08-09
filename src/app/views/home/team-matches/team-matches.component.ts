import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api-services/api.service';

@Component({
  selector: 'app-team-matches',
  templateUrl: './team-matches.component.html',
  styleUrls: ['./team-matches.component.scss']
})
export class TeamMatchesComponent implements OnInit {
  public matches: any;
  public loadingMatches: boolean = false;

  constructor(public apiService: ApiService){
  }


  ngOnInit(): void {
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

}
