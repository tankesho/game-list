import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { NgForm } from '@angular/forms';
import { Entry } from '../model/entry';
import { Game } from '../model/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent {
  @ViewChild('form') form!: NgForm;
  @Output() addGameEvent = new EventEmitter<string>();

  @Input() id!: number;
  @Input() category!: number;
  @Input() score!: number;
  @Input() hoursPlayed!: number;
  @Input() favorite!: boolean;
  @Input() game!: Game;
  @Input() gameId!: number;
  @Input() userId!: number;
  submit!: string;

  entry!: Entry;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private entryService: EntryService,
    private router: Router
    ) {}

  submitType(type: string): void {
    this.submit = type;
  }


  ngOnSubmit() {
    this.entry = new Entry(this.id, this.category, this.hoursPlayed, this.score, this.gameId, this.userId);
    if (this.entryService.isValid(this.userId)) {
      if (!this.entryService.isExist(this.userId, this.gameId)) {
        console.log("asasasas")
        this.entryService.save(this.entry)
        .then(() => {
          this.isSuccess = true;
          this.message = 'Jogo adicionado a sua lista com sucesso com sucesso!';
        })
        .catch((e) => {
          this.isSuccess = false;
          this.message = e;
        });
      } else {
        this.entryService.update(this.entry)
        .then(() => {
          this.isSuccess = true;
          this.message = 'Jogo atualizado com sucesso com sucesso!';
        })
        .catch((e) => {
          this.isSuccess = false;
          this.message = e;
        }).finally(() => {
          this.isShowMessage = true;
          this.form.reset;
        });
      }
    }
  }

  onDelete() {
    this.entry = new Entry(this.id, this.category, this.hoursPlayed, this.score, this.gameId, this.userId);
    if (this.entryService.isValid(this.userId)) {
      let confirmation = window.confirm(
        'Quer mesmo remover o jogo de sua lista?'
      );
      if (!confirmation) {
        return;
      }
      this.entryService.delete(this.entry)
      .then(() => {
        this.isSuccess = true;
        this.message = 'Jogo removido sua lista com sucesso com sucesso!';
      })
      .catch((e) => {
        this.isSuccess = false;
        this.message = 'Ocorreu um erro na operação, tente novamente mais tarde.!';
      })
      .finally(() => {
        this.router.navigate(['users', this.entry.userId]);
        alert('Jogo removido com sucesso');
      });
    }
  }
}
