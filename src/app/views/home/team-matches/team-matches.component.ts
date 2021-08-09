import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../core/api-services/api.service';
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-team-matches',
  templateUrl: './team-matches.component.html',
  styleUrls: ['./team-matches.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamMatchesComponent implements OnInit {
  public matches: any;
  public loadingMatches: boolean = false;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.getMatches();
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  getMatches() {
    this.loadingMatches = true;
    this.apiService.getMatches().subscribe(
      (res) => {
        this.loadingMatches = false;
        this.matches = res;
      },
      (err) => {
        this.loadingMatches = false;
      }
    );
  }
}
