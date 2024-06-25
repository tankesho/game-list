export class Game {
  id: number;
  title: string;
  developer: string;
  publisher: string;
  launchDate: string;
  genre: string;
  constructor(id: number, title: string, developer: string, publisher: string, launchDate: string, genre: string) {
    this.id = id;
    this.title = title;
    this.developer = developer;
    this.publisher = publisher;
    this.launchDate = launchDate;
    this.genre = genre;
  }

  public static clone(game: Game) {
    let g: Game = new Game(game.id, game.title, game.developer, game.publisher, game.launchDate, game.genre);
    return g;
  }

  public static toWS(game: Game) {
    let g: Game = new Game(game.id, game.title, game.developer, game.publisher, game.launchDate, game.genre);
    return g;
  }
}
