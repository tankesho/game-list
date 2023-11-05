import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent {
  @Output() addGameEvent = new EventEmitter<string>();

  addGame(title: string): void {
    this.addGameEvent.emit(title);
  }
}
