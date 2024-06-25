export class Game {
  id: number;
  title: string;
  developer: string;
  publisher: string;
  launchDate: string;
  genre: string;
  image: string;
  constructor(id: number, title: string, developer: string, publisher: string, launchDate: string, genre: string, image: string) {
    this.id = id;
    this.title = title;
    this.developer = developer;
    this.publisher = publisher;
    this.launchDate = launchDate;
    this.genre = genre;
    this.image = image;
  }

  public static clone(game: Game) {
    let g: Game = new Game(game.id, game.title, game.developer, game.publisher, game.launchDate, game.genre, game.image);
    return g;
  }

  public static toWS(game: Game) {
    let g: Game = new Game(game.id, game.title, game.developer, game.publisher, game.launchDate, game.genre, game.image);
    return g;
  }
}
