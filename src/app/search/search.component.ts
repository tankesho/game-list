import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../model/game';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  img = 'placeholder.jpg';

  constructor(private route: ActivatedRoute) {}

  games!: Game[];
  search = '';

  ngOnInit(): void {
    this.games = WebStorageUtil.get(Constants.GAMES_KEY);
  }

  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }
}
