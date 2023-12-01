import { Component, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
import { EntryService } from '../services/entry.service';
import { ActivatedRoute } from '@angular/router';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';
import { Entry } from '../model/entry';
import { Game } from '../model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ],
  providers: [ EntryService ]
})
export class GameComponent implements AfterViewInit {
  URL_PT = 'http://localhost:3000/registros/';
  entry!: Entry;
  game!: Game;

  constructor(
    private route: ActivatedRoute,
    private entryService: EntryService
    ) {}

  ngOnInit() {
    let gameId: number = +this.route.snapshot.paramMap.get('id')!;

    let userId = WebStorageUtil.get(Constants.USERNAME_KEY).id;
    this.game = WebStorageUtil.get(Constants.GAMES_KEY)[gameId];


    this.entryService
      .getEntryByUserAndGame(userId, gameId)
      .then((e: Entry[]) => {
        this.entry = e[0];
      })
      .catch(() => {
        alert("Desculpe, não foi possível resgatar as informações da sua lista!")
      })
  }

  ngAfterViewInit() : void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    });
  }

  addGame(title: string): void {
    alert(title + ' adicionado com sucesso a sua lista!');
  }
}
